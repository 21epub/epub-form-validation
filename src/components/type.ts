export interface Error {
  cid: string
  msg: string
  label: string
}

export interface Result {
  pass: boolean
  error?: Error
}
/* eslint-disable */
export interface Info {
  widget_type: string
  value: number | number[] | string | string[] | boolean | undefined
  isRequired: boolean
  label: string
  cid: string
}

export interface FormData {
  [cid: string]: any
}

enum FieldType {
  INTEGER = 0,
  FLOAT = 1,
  STRING = 2,
  DATETIME = 3,
  IMAGE = 4,
  RADIO = 5,
  MULTISELECT = 6,
  TEXT = 7,
  RICHTEXT = 8
}

interface Config {
  [key: string]: any
}

export interface Field {
  cid: string
  label: string
  is_required: boolean
  read_only: boolean
  field_type?: FieldType | null
  widget_type: string
  config?: Config
  defaultValue?: string | boolean | string[] | number[]
  is_unique?: boolean
  is_random?: boolean
  min?: number | null
  max?: number | null
  anyone_can_edit?: boolean
  can_filter?: boolean
  can_sort?: boolean
  can_calc?: boolean
  can_query?: boolean
  can_search?: boolean
  options?: string[] | number[]
  precision?: number
}
/* eslint-enable */
