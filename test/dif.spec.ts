import type { FastifyInstance } from "fastify";
import { difference } from "../index.js";

describe("GET /dif/:id", ()=>{
    let app: FastifyInstance;

    beforeAll(async () =>{
        app = difference();
        await app.ready()
    })

    afterAll(async () =>{
        await app.close();
    })

    it("it shall return 10 -2"), async () =>{
        const res = await app.inject({
            method: "GET",
            url: "/dif/:10",
        });
        expect(res.statusCode).toBe(200);
        expect(res.json()).toEqual({dif: 10 - 2});
    }
})