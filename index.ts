import Fastify, { type FastifyInstance, type FastifyReply, type FastifyRequest } from "fastify"

const fastify = Fastify({logger: true})

fastify.get("/", async (_req: FastifyRequest, _reply: FastifyReply) => {
    return {"hello": "hi"}
})

export function sum(): FastifyInstance {
  const app = Fastify({ logger: true });

  app.get("/sum/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const a = Number((request.params as any).id);
    const b = a - 2;
    if (isNaN(a) || isNaN(b)) {
      reply.code(400).send({ error: "Invalid" });
      return;
    }
    return { sum: a + b };
  });

  return app;
}

export function difference(): FastifyInstance{
    const app = Fastify({logger: true});
    app.get("/dif/:id", async()=>{
        return {dif: 10-2}
    })
    return app
}

if (require.main == module){

    const start = async() =>{
        try {
            await fastify.listen({port: 3010})
            console.log("Listining on port: ", 3010)
    }catch(err){
        console.error(err)
    }   
}
start();
}