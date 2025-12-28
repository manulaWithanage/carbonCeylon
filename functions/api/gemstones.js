// API endpoint for gemstones
// GET /api/gemstones - Returns all gemstones
// PUT /api/gemstones - Updates gemstones (admin)

import { gemstones as defaultGemstones } from '../src/data/products.js';

export async function onRequestGet(context) {
    const { env } = context;

    try {
        // Try to get gemstones from KV
        const stored = await env.PRODUCTS_KV.get('gemstones', { type: 'json' });

        if (stored) {
            return new Response(JSON.stringify(stored), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Return default gemstones if nothing in KV
        return new Response(JSON.stringify(defaultGemstones), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function onRequestPut(context) {
    const { env, request } = context;

    try {
        const gemstones = await request.json();

        // Save to KV
        await env.PRODUCTS_KV.put('gemstones', JSON.stringify(gemstones));

        return new Response(JSON.stringify({ success: true, count: gemstones.length }), {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
}
