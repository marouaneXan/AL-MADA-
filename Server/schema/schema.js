const Product=require('../models/Product')
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
}=require('graphql')

//Product Type
const ProductType=new GraphQLObjectType({
    name:"Product",
    fields:()=>({
        id:{type:GraphQLID},
        Brand_name:{type:GraphQLString},
        IPR:{type:GraphQLString},
        Status:{type:GraphQLString},
        Number:{type:GraphQLString},
        Office:{type:GraphQLString},
        Owner:{type:GraphQLString},
        Designation:{type:GraphQLString},
        Nice_classification:{type:GraphQLString}
    })
})

const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        products:{
            type:new GraphQLList(ProductType),
            resolve(parent,args){
                return Product.find()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
  });