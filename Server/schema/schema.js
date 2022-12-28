const Product = require("../models/Product");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
const { GraphQLNonNull } = require("graphql");

//Product Type
const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    Brand_name: { type: GraphQLString },
    IPR: { type: GraphQLString },
    Status: { type: GraphQLString },
    Number: { type: GraphQLString },
    Office: { type: GraphQLString },
    Owner: { type: GraphQLString },
    Designation: { type: GraphQLString },
    Nice_classification: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return Product.find();
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },
  },
});

//Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //Add product
    addProduct: {
      type: ProductType,
      args: {
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Owner: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newProduct = Product.create({
          Brand_name: args.Brand_name,
          IPR: args.IPR,
          Status: args.Status,
          Number: args.Number,
          Office: args.Office,
          Owner: args.Owner,
          Designation: args.Designation ,
          Nice_classification: args.Nice_classification,
        });
        if (newProduct) return newProduct;
      },
    },
    //Update product
    updateClient: {
      type: ProductType,
      args: {
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Owner: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Product.findByIdAndUpdate(
          args.id,
          {
            $set: {
              Brand_name: args.Brand_name,
              IPR: args.IPR,
              Status: args.Status,
              Number: args.Number,
              Office: args.Office,
              Owner: args.Owner,
              Designation: args.Designation,
              Nice_classification: args.Nice_classification,
            },
          },
          { new: true }
        );
      },
    },
    //Delete product
    deleteProduct: {
      type: ProductType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Product.findByIdAndRemove(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
