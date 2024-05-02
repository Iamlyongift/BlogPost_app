import Joi from "joi";

export const RegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
  confirm_password: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
  phoneNumber: Joi.string().required(),
  country: Joi.string().required(),
  age: Joi.number().required(),
});

export const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .regex(/^[a-zA-Z0-9]{3,30}$/)
    .required(),
});

export const option = {
  abortearly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
};

export const creatBlogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  image: Joi.string().required()
})

export const updateTodoSchema = Joi.object({
  description: Joi.string().required(),
  completed: Joi.boolean().required()
})    