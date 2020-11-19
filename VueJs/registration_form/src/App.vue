<template>
    <div id="app">
      <form class="main_field" @submit.prevent="submit">
        <div class="info-div"><span>Форма регистрации</span></div>
        <div class="separator"></div>
        <div class="el-wr">
          <input type="text" class="form-field" placeholder="Фамилия*" v-model.trim="$v.surname.$model">
          <p class="invalid" v-if="!$v.surname.required && $v.surname.$dirty">Поле Фамилия не должно быть пустым*</p>
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" v-model.trim="$v.name.$model" aria-label="Имя" placeholder="Имя*">
          <p class="invalid" v-if="!$v.name.required && $v.name.$dirty">Поле Имя не должно быть пустым*</p>
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="middle-name-field" v-model.trim="$v.middleName.$model" aria-label="Отчество" placeholder="Отчество">
          <p class="invalid" v-if="!$v.middleName.required && $v.middleName.$dirty">Поле Отчество не должно быть пустым*</p>
        </div>
        <div class="el-wr date">
          <input type="date" class="form-field" name="name-field" v-model.trim="$v.dateBirthd.$model" aria-label="Дата рождения" placeholder="Дата рождения*">
          <p class="invalid" v-if="!$v.dateBirthd.required && $v.dateBirthd.$dirty">Поле дата рождения не должно быть пустым*</p>
        </div>
        <div class="el-wr">
          <input type="text" class="form-field phone-number" name="name-field" v-model.trim="$v.phone.$model" aria-label="Номер телефона" maxlength="11" placeholder="Номер телефона*">
          <p class="invalid" v-if="$v.phone.$dirty && !$v.phone.required">Поле номер телефона не должно быть пустым*</p>
          <p class="invalid" v-else-if="$v.phone.$dirty && !$v.phone.minLength">Поле номер телефона должно начинаться с 7 и иметь 11 символов*</p>
        </div>
        <div class="el-wr flex-wr">
          <p class="radio-desc">Выберите ваш пол:</p>
          <div class="radio-wrapper">
            <p class="male"><input type="radio" class="radio" name="gender-selection">М</p>
            <p><input type="radio" class="radio" name="gender-selection">Ж</p>
          </div>
        </div>
        <div class="el-wr flex-wr">
          <p class="radio-desc">Выберите вашу группу*</p>
          <div class="radio-wrapper">
            <select multiple size="3" name="group-wrapper"  v-model.trim="$v.selectedGroup.$model">
              <option value="vip">VIP</option>
              <option value="problematic">Проблемные</option>
              <option value="OMC">OMC</option>
            </select>
          </div>
        </div>
        <p class="invalid inv--optional" v-if="!$v.selectedGroup.required && $v.selectedGroup.$dirty">Выберите вашу группу!</p>
        <div class="el-wr flex-wr">
          <p class="radio-desc">Лечащий врач:</p>
          <div class="radio-wrapper">
            <select name="group-wrapper" class="group-wrapper">
              <option value="vip">Иванов</option>
              <option value="problematic">Захаров</option>
              <option value="OMC">Чернышева</option>
            </select>
          </div>
        </div>
        <div class="checkbox">
          <p class="radio-desc checkbox-desc">Не отправлять СМС!</p>
          <input type="checkbox" name="sms">
        </div>
        <div class="el-wr part-info">
          <h2>Адрес:</h2>
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Индекс" placeholder="Индекс">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Страна" placeholder="Страна">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Область" placeholder="Область">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Город" v-model="city" placeholder="Город*">
          <p class="invalid" v-if="$v.city.$dirty && !$v.city.required">Поле город не должно быть пустым*</p>
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Улица" placeholder="Улица">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Дом" placeholder="Дом">
        </div>
        <div class="el-wr part-info min-mg">
          <h2>Паспорт:</h2>
        </div>
        <div class="el-wr flex-wr">
          <p class="radio-desc">Тип документа:*</p>
          <div class="radio-wrapper">
            <select name="group-wrapper" v-model="selectedPapers">
              <option value="pasport">Паспорт</option>
              <option value="birth-certificate">Свидетельство о рождении</option>
              <option value="driveк-license">Вод. удостоверение</option>
            </select>
          </div>
        </div>
        <p class="invalid inv--optional" v-if="!$v.selectedPapers.required && $v.selectedPapers.$dirty">Выберите тип документа!</p>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Серия" placeholder="Серия">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Номер" placeholder="Номер">
        </div>
        <div class="el-wr">
          <input type="text" class="form-field" name="name-field" aria-label="Кем выдан" placeholder="Кем выдан">
        </div>
        <div class="el-wr date">
          <input type="date" class="form-field" name="name-field" aria-label="Дата выдачи" placeholder="Дата выдачи*" v-model="datePapers">
          <p class="invalid" v-if="!$v.datePapers.required && $v.datePapers.$dirty">Поле дата выдачи документа не должно быть пустым*</p>
        </div>
        <h5 class="note">*Поле обязательное для заполнения.</h5>
        <input type="submit" value="Отправить" class="btn" :disabled="submitStatus === 'PENDING'">
        <p v-if="submitStatus === 'ERROR'"></p>
        <p v-if="submitStatus === 'PENDING'"></p>
      </form>
    </div>
</template>

<script>
import { required, maxLength, minLength, between } from 'vuelidate/lib/validators'

export default {
  data() {
      return {
        surname: '',
        name: '',
        middleName: '',
        phone: '',
        dateBirthd: '',
        selectedGroup: [],
        city: '',
        selectedPapers: '',
        datePapers: '',
        submitStatus: null
      }
  },
  validations: {
    surname: {
      required
    },
    name: {
      required
    },
    middleName: {
      required,
    },
    phone: {
      required,
      minLength: minLength(11),
      between: (7, 79999999999)
    },
    dateBirthd: {
      required,
    },
    selectedGroup: {
      required,
    },
    city: {
      required,
    },
    selectedPapers: {
      required,
    },
    datePapers: {
      required,
    },
  },
  methods: {
    submit() {
      console.log(this.$v)
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        alert("Регистрация завершена!")
      }
    }
  }
}

</script>

<style>

</style>
