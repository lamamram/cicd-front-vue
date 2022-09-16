import { mount } from "@vue/test-utils"
import EmployeeForm from 'src/components/EmployeeForm.vue'
import { describe, expect, it } from 'vitest'


describe('invalidName', () => {
    it('test empty name', () => {
      const employee = {
        name: "",
        email: ""
      }
      const wrapper = mount(EmployeeForm)
      wrapper.setData({ employee: employee })
      expect(wrapper.vm.invalidName).toBe(true)
    })
})