import Vue from 'vue'
import 'sweetalert2/dist/sweetalert2.min.css'
import Swal from 'sweetalert2'

export const SweetAlert = {
  install: (Vue) => {
    Vue.prototype.$alert = Swal
    Vue.prototype.$message = (title, type, message, ...args) => Swal.fire({
      args,
      title,
      type,
      text: message,
      timer: 3000
    })
  }
}

Vue.use(SweetAlert)

export default SweetAlert
