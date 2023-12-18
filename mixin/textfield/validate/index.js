const emailRegEx = /\S+@\S+\.\S+/;
const passwordReg = /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

export default {
  methods: {
    checkRegExEmail: function checkRegExEmail(email) {
      return emailRegEx.test(String(email).toLowerCase());
    },
    checkRegExPassword: function checkRegExEmail(password) {
      return passwordReg.test(String(password).toLowerCase());
    },
  },
};
