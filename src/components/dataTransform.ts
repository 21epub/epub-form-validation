import { Field, FormData } from './type'

interface Props {
  rules: Field[]
  data: FormData
}

function dataTransform({ rules, data }: Props) {
  const dataList = {} as any
  const filter = rules.filter((e) => e.read_only === false)
  const result = filter.map((a) => a.cid)

  for (let i = 0; i < result.length; i += 1) {
    const dataKey: string = result[i]
    dataList[dataKey] = data[dataKey]
  }

  console.log('获取真实输入', dataList)

  return dataList
}

export default dataTransform
