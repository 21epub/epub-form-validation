import React from 'react'

import { validateAll } from '../src'
const rules = [
  {
    read_only: false,
    field_type: 2,
    is_unique: false,
    can_search: false,
    cid: 's1',
    max: null,
    defaultValue: null,
    min: null,
    precision: 0,
    can_filter: true,
    can_sort: true,
    widget_type: 'SubmitButton',
    label: '提交按钮',
    can_query: false,
    anyone_can_edit: false,
    is_random: false,
    can_calc: false,
    is_required: false,
    config: {
      buttonText: '提交'
    },
    options: []
  },
  {
    read_only: false,
    field_type: 6,
    is_unique: false,
    can_search: false,
    cid: 'm1',
    max: null,
    defaultValue: null,
    min: null,
    precision: 0,
    can_filter: true,
    can_sort: false,
    widget_type: 'Radio',
    label: '单选框',
    can_query: false,
    anyone_can_edit: false,
    is_random: false,
    can_calc: false,
    is_required: true,
    config: {},
    options: []
  },
  {
    read_only: true,
    field_type: 2,
    is_unique: true,
    can_search: false,
    cid: 'id',
    max: null,
    defaultValue: null,
    min: null,
    precision: 0,
    can_filter: true,
    can_sort: true,
    widget_type: '',
    label: 'ID',
    can_query: false,
    anyone_can_edit: false,
    is_random: false,
    can_calc: false,
    is_required: true,
    config: {},
    options: []
  }
]

const data = { s1: undefined, m1: '' }

const content = {
  rules: rules,
  data: data
}

const App = () => {
  const Err = JSON.stringify(validateAll(content))
  console.log(Err)
  return <div>{Err}</div>
}

export default App
