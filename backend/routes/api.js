import { Router } from "express";

const router = Router();
const routerArray = [];
//Routes will be http://serverIP:4000/api/
router.get("/", (req, res)=>{
    for (const routeObj in router.stack)
    {
        routerArray.push(router.stack[routeObj].route.path);
    }
    
    res.send(`Available routes <br> ${routerArray}`);
})
router.get("/test", (req, res)=>{
    res.send("Hello");
})
router.get("/test1", (req, res)=>{
    res.send("Hello1");
})
export default router;