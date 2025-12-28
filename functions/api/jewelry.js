// API endpoint for jewelry
// GET /api/jewelry - Returns all jewelry
// PUT /api/jewelry - Updates jewelry (admin)

import { jewelry as defaultJewelry } from '../src/data/products.js';

export async function onRequestGet(context) {
    const { env } = context;

    try {
        // Try to get jewelry from KV
        const stored = await env.PRODUCTS_KV.get('jewelry', { type: 'json' });

        if (stored) {
            return new Response(JSON.stringify(stored), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }

        // Return default jewelry if nothing in KV
        return new Response(JSON.stringify(defaultJewelry), {
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
        const jewelry = await request.json();

        // Save to KV
        await env.PRODUCTS_KV.put('jewelry', JSON.stringify(jewelry));

        return new Response(JSON.stringify({ success: true, count: jewelry.length }), {
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
