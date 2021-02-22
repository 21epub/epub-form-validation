import Joi from 'joi'
import { Info, Result } from './type'

function validate(info: Info, options?: any) {
  const { widget_type, isRequired, label, cid } = info
  let { value } = info

  const cidLocal = cid
  const labelLocal = label

  let precision
  let max
  let min
  if (options) {
    if (widget_type === 'FloatNumber') {
      max =
        options.max === null || options.max === undefined
          ? Number.MAX_SAFE_INTEGER
          : options.max
      min =
        options.min === null || options.min === undefined
          ? Number.MIN_SAFE_INTEGER
          : options.min
      precision =
        options.precision === 0 ? Number.MAX_SAFE_INTEGER : options.precision
    } else if (widget_type === 'Checkbox' || widget_type === 'Text') {
      max =
        options.max === null || options.max === undefined
          ? Number.MAX_SAFE_INTEGER
          : options.max
      min = options.min === null || options.min === undefined ? 0 : options.min
    } else {
      max =
        options.max === null || options.max === undefined
          ? Number.MAX_SAFE_INTEGER
          : options.max
      min =
        options.min === null || options.min === undefined
          ? Number.MIN_SAFE_INTEGER
          : options.min
    }
  }

  let schema
  switch (widget_type) {
    case 'InputNumber': {
      schema = Joi.object({
        InputNumber: isRequired
          ? Joi.number().max(max).min(min).required()
          : Joi.number().max(max).min(min).optional()
      })

      if (typeof value === 'object' && value === null) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `${label}不符合格式要求`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'FloatNumber': {
      schema = Joi.object({
        FloatNumber: isRequired
          ? Joi.number()
              .precision(precision)
              .strict()
              .max(max)
              .min(min)
              .required()
          : Joi.number()
              .precision(precision)
              .strict()
              .max(max)
              .min(min)
              .optional()
      })

      if (typeof value === 'object' && value === null) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `${label}不符合格式要求`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Name': {
      schema = Joi.object({
        Name: isRequired ? Joi.string().required() : Joi.string().optional()
      })

      if (typeof value === 'string' && value.length === 0) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `${label}不符合格式要求`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Phone': {
      schema = Joi.object({
        Phone: isRequired
          ? Joi.string().pattern(new RegExp('^[1][3-9][0-9]{9}$')).required()
          : Joi.string().pattern(new RegExp('^[1][3-9][0-9]{9}$')).optional()
      })

      if (typeof value === 'string' && value.length === 0) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `请输入正确的${label}`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Mail': {
      schema = Joi.object({
        Mail: isRequired
          ? Joi.string()
              .email({ tlds: { allow: false } })
              .required()
          : Joi.string()
              .email({ tlds: { allow: false } })
              .optional()
      })

      if (typeof value === 'string' && value.length === 0) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `请输入正确的${label}`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Text': {
      schema = Joi.object({
        Text: isRequired
          ? Joi.string().max(max).min(min).required()
          : Joi.string().max(max).min(min).optional()
      })

      if (typeof value === 'string' && value.length === 0) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList

        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        } else {
          messageList = `${label}不符合格式要求`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Radio': {
      schema = Joi.object({
        Radio: isRequired ? Joi.required() : Joi.optional()
      })
      if (typeof value === 'string' && value.length === 0) value = undefined
      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList = ''
        if (message[0].type === 'any.required') {
          messageList = `请选择${label}`
        }
        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Checkbox': {
      schema = Joi.object({
        Checkbox: Joi.array().max(max).min(min).required()
      })

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details

        let messageList = ''

        if (message[0].type === 'any.required') {
          messageList = `请选择${label}`
        } else if (message[0].type === 'array.min') {
          messageList = `请至少选择${message[0]?.context?.limit}项`
        } else if (message[0].type === 'array.max') {
          messageList = `请最多选择${message[0]?.context?.limit}项`
        }

        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'Select': {
      schema = Joi.object({
        Select: isRequired ? Joi.required() : Joi.optional()
      })
      if (typeof value === 'string' && value.length === 0) value = undefined
      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList = ''
        if (message[0].type === 'any.required') {
          messageList = `请选择${label}`
        }
        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'TextArea': {
      schema = Joi.object({
        TextArea: isRequired ? Joi.required() : Joi.optional()
      })

      if (typeof value === 'string' && value.length === 0) value = undefined

      const checked = schema.validate(
        { [widget_type]: value },
        { abortEarly: false }
      )
      if (checked.error) {
        const message = checked.error.details
        let messageList = ''
        if (message[0].type === 'any.required') {
          messageList = `请输入${label}`
        }
        const result: Result = {
          pass: false,
          error: {
            cid: cidLocal,
            msg: messageList,
            label: labelLocal
          }
        }
        return result
      }
      const result: Result = {
        pass: true
      }
      return result
    }
    case 'SubmitButton': {
      const result: Result = {
        pass: true
      }
      return result
    }
    default:
      schema = Joi.object({})
      return {
        pass: false,
        error: { cid: cidLocal, msg: '校验类型不存在', label: labelLocal }
      }
  }
}

export default validate
