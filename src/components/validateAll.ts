import validate from './validator'
import dataTransform from './dataTransform'
import { FormData, Field } from './type'

interface Props {
  rules: Field[]
  data: FormData
}

function validateAll({ rules, data }: Props) {
  const content = {
    data,
    rules
  }

  const dataTransformed = dataTransform(content)
  const dataKeyList = Object.keys(dataTransformed)
  const errList = []
  for (let i = 0; i < dataKeyList.length; i += 1) {
    const dataKey = dataKeyList[i]
    const detail = rules.find((e) => e.cid === dataKey)

    if (detail && detail.read_only === false) {
      const info = {
        widget_type: detail.widget_type,
        value: dataTransformed[dataKey],
        label: detail.label,
        cid: detail.cid,
        isRequired: detail.is_required
      }

      let options
      switch (detail.widget_type) {
        case 'InputNumber':
          options = {
            max: detail.max,
            min: detail.min
          }
          break
        case 'Text':
          options = {
            max: detail.max,
            min: detail.min
          }
          break
        case 'Checkbox':
          options = {
            max: detail.max,
            min: detail.min
          }
          break
        case 'FloatNumber':
          options = {
            max: detail.max,
            min: detail.min,
            precision: detail.precision
          }
          break
        default:
          options = 'noOptions'
          break
      }
      if (options !== 'noOptions') {
        const err = validate(info, options)
        if (err.error && err.pass === false) {
          errList.push(err.error)
        }
      } else {
        const err = validate(info)
        if (err.error && err.pass === false) {
          errList.push(err.error)
        }
      }
    }
  }
  return errList
}
export default validateAll
