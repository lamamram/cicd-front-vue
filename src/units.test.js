import { mount } from "@vue/test-utils"
import EmployeeForm from 'src/components/EmployeeForm.vue'
import { describe, expect, it, beforeEach } from 'vitest'

beforeEach(async (ctx) => {
  // extend context
  ctx.employee = {
    name: "",
    email: ""
  }
})

describe('EmployeeForm', () => {
    it('test empty name', ({ employee }) => {
      const wrapper = mount(EmployeeForm)
      wrapper.setData({ employee: employee })
      expect(wrapper.vm.invalidName).toBe(true)
    })
    it('test empty mail', ({ employee }) => {
      const wrapper = mount(EmployeeForm)
      wrapper.setData({ employee: employee })
      expect(wrapper.vm.invalidEmail).toBe(true)
    })
})



