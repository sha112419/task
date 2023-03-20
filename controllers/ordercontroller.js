const { json } = require("sequelize");
const db = require("../models/index");
const order = require("../models/order");

const order = db.order;


const addorder = async(req,res) =>{
    try{
     let info ={
        amount: req.body.amount,
        currency: req.body.currency,
        description: req.body.description
     };
     if(info){
        const order =await order.create(info).then(result =>{
            return res.status(200).json({
                success: true,
                message: "user created successfully",
                result: result,
            })
        }).catch(err =>{
            console.log("something wrong2",err)
        })
     } else{
        return res.send(201).json({
            success:false,
            message:"something wrong 1"
        })
     }   
    }
    catch(error){
        return res.status(201).json({
            success: false,
            message: "something wrong"
        })
    }
};

const getallorder = async (req,res) =>{
    try {
      const order =await order.findall({});
      res.status(200).send(order);
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: "something wrong3"
        })
    }
}

const getoneorder = async(req, res) =>{
    let id = req.body.id;
    const order= await order.findOne({
        attributes:[
            'id',
            'amount',
            'currency',
            'description'
        ],
        where:{id: id}})
    res.status(201).send(order); 
  };

const updateorder = async (req,res) =>{
    const {
        id,
        amount,
        currency,
        description
    }= req.body
    try{
    await order.findOne({
        where:{id:id},
    })
    .then(async function(result){
        if(result){
            await order.update({
            amount: amount,
            currency: currency,
            description: description
            },{
                where:{id:id},
            })
        }
        return res.status(200).json({
            success:true,
            message: "user updated successfully"
        })
    }).catch((err)=>{
        return res.status(201).json({
            success:false,
            message:"something wrong5"
        })
    })
    }catch(err){
        return res.status(201).json({
            success: false,
            message: "something wrong4"
          })
    }
};

const deleteorder = async (req, res) => {
    let Id = req.body.id;
  
    var index ;
    for(let values in order){
        if(order[values] === Id){
          index = order[values];
          break;
        }
    }

    if (index) {
      res.status(404).json({ 
        status: 0,
        message: "id not found" });
    } else {
      await order.destroy({ where: { id: Id } });
      res.status(202).json({
        status: 1,
        message: "deleted successfully",
      });
    }
  };

  module.exports = {
    addorder,
    getallorder,
    getoneorder,
    updateorder,
    deleteorder,
  }