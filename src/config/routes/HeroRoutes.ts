import express = require("express");
import HeroController = require("./../../controllers/HeroController");

var router = express.Router();
class HeroRoutes {
    private _heroController: HeroController;
    
    constructor () {
        this._heroController = new HeroController();   
    }
    get routes () {
        var controller = this._heroController;
        router.get("/heroes", controller.retrieve);
        router.post("/heroes", controller.create);
        router.put("/hero/:_id", controller.update);
        router.get("/hero/:_id", controller.findById);
        router.delete("/hero/:_id", controller.delete);
        
        return router;
    }
    
    
}

Object.seal(HeroRoutes);
export = HeroRoutes;