"use strict";

Vue.use(window.vuelidate["default"]);
var _window$validators = window.validators;
var required = _window$validators.required;
var email = _window$validators.email;

// above it ES5 for ios9 browsers

// below is ES6 version
// Vue.use(window.vuelidate.default);
// const { required, email } = window.validators;




new Vue({
  el: '#app',
  template: `

<form>




<div class="cascading-dropdown">


<div class="row">

  <div class="col-md-6 dropdown form-group">
   <label class="form-control-label">取扱メーカー</label>
    <select  id="one" class="custom-select form-control" v-model="form.selectedMaker">
      <option class="form-control" value="">取扱メーカーの選択</option>
      <option class="form-control" v-for="(category_key, category_val) in form.catalog" :value="category_val" :key="category_key">{{category_val}}</option>
    </select>
  </div>


	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">


	  <template v-if="form.selectedMaker">
      取扱メーカー<br>
      <strong>{{ form.selectedMaker }}</strong>
      </template>
      <template v-else>
      取扱メーカーを選択してください。<br>
      取扱メーカー以外は[メッセージ]にご記入してください。
      </template>

	</div>
</div>


<div class="row">

  <div class="col-md-6 dropdown form-group">
    <label class="form-control-label">商品カテゴリー</label>
    <select   class="custom-select form-control" :disabled="form.categories.length == 0" v-model="form.selectedCategory">
      <option class="form-control" value="">商品カテゴリーの選択</option>
      <option class="form-control" v-for="(product_key, product_val) in form.categories" :key="product_key">{{product_val}}</option>
    </select>
  </div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">


	  <template v-if="form.selectedCategory">
        商品カテゴリー<br>
        <strong>{{ form.selectedCategory }}</strong>
      </template>
      <template v-else>
      商品カテゴリーを選択してください。<br>
       取扱商品カテゴリー以外は[メッセージ]にご記入してください。
      </template>

	</div>
</div>


<div class="row">

  <div class="col-md-6 dropdown form-group">
    <label class="form-control-label">商品</label>
    <select   class="custom-select form-control" :disabled="form.products.length == 0" v-model="form.selectedProduct">
      <option class="form-control" value="">商品の選択</option>
      <option class="form-control" v-for="product_key in form.products" :key="product_key">{{product_key}}</option>
    </select>
  </div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">
	

	  <template v-if="form.selectedCategory">
        商品<br>
        <strong>{{form.selectedProduct}}</strong>
      </template>
      <template v-else>
       商品を選択してください。<br>
       取扱商品以外は[メッセージ]にご記入してください。
      </template>

	</div>
</div>


<br>


<div class="row">

<div class="col-md-6 form-group">
  <label for="message">メッセージ<br>
  <small>(○○○社・○○○商品・○○○個など<br>
  取扱メーカー商品以外の商品や機械についてもご気軽にお問合せください)</small></label>
    <textarea 
    v-model="form.message"
    type="text" 
    name="form.message" 
    class="form-control"
    rows="7"
    >
    </textarea>
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.message">
        メッセージ<br>
        <strong>{{form.message}}</strong>
      </template>
      <template v-else>
       取扱商品以外の商品や機材についてなど、ご気軽にお問合せください。
      </template>

	</div>
</div>


<br>





<div class="row">

	<div class="col-md-6 form-group" 
	  :class="{ 'has-danger': $v.form.company.$error, 
	  'has-success': !$v.form.company.$invalid && $v.form.company.$dirty }" 
	  >
	  <label class="form-control-label" for="form.company">{{form.companyTitle}}</label>
	    <small v-if="$v.form.company.$error" class="form-control-feedback"> &nbsp; &nbsp;({{form.companyTitle}}は必須)</small>
	  
	  <input 
	  name="form.company" 
	  type="text" 
	  class="form-control"
	  :class="{ 
	        'form-control-danger': $v.form.company.$error, 
	        'form-control-success': !$v.form.company.$invalid && $v.form.company.$dirty
	        }"
	  v-model.trim="form.company" 
	  @blur="$v.form.company.$touch()"
	  >
	</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.company">
	  	会社名<br>
        <strong>{{form.company}}</strong>
      </template>
      <template v-else>
       会社名をご記入ください。
      </template>

	</div>
</div>




<div class="row">

<div class="col-md-6 form-group" 
  :class="{ 'has-danger': $v.form.dept.$error, 
  'has-success': !$v.form.dept.$invalid && $v.form.dept.$dirty}" 
  >
  <label class="form-control-label" for="form.dept">{{form.deptTitle}}</label>
  <small v-if="$v.form.dept.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.deptTitle}}は必須)</small>
  <input 
  name="form.dept" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control-danger': $v.form.dept.$error, 
        'form-control-success': !$v.form.dept.$invalid && $v.form.dept.$dirty
        }"
  v-model.trim="form.dept" 
  @blur="$v.form.dept.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.dept">
	  	部署名<br>
        <strong>{{form.dept}}</strong>
      </template>
      <template v-else>
       部署名をご記入ください。
      </template>

	</div>
</div>




<div class="row">

<div class="col-md-6 form-group" 
  :class="{ 'has-danger': $v.form.name.$error, 'has-success': !$v.form.name.$invalid }" >
  <label class="form-control-label" for="form.name">{{form.nameTitle}}  <small>【必須】</small></label>
  <small v-if="$v.form.name.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.nameTitle}}は必須)</small>
  <input 
  name="form.name" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control-danger': $v.form.name.$error, 
        'form-control-success': !$v.form.name.$invalid 
        }"
  v-model.trim="form.name" 
  @blur="$v.form.name.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.name">
	  	お名前<br>
        <strong>{{form.name}}</strong>
      </template>
      <template v-else>
       お名前をご記入ください。（必須項目です）
      </template>

	</div>
</div>






<div class="row">

<div class="col-md-6 form-group" 
  :class="{ 'has-danger': $v.form.furigana.$error, 'has-success': !$v.form.furigana.$invalid }" >
  <label class="form-control-label" for="form.furigana">{{form.furiganaTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.furigana.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.furiganaTitle}}は必須)</small>
  <input 
  name="form.furigana" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control-danger': $v.form.furigana.$error, 
        'form-control-success': !$v.form.furigana.$invalid 
        }"
  v-model.trim="form.furigana" 
  @blur="$v.form.furigana.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.furigana">
	  	ふりがな<br>
        <strong>{{form.furigana}}</strong>
      </template>
      <template v-else>
       ふりがなをご記入ください。（必須項目です）
      </template>

	</div>
</div>




<div class="row">

<div class="col-md-6 form-group" 
  :class="{ 'has-danger': $v.form.email.$error, 'has-success': !$v.form.email.$invalid }" >
  <label class="form-control-label" for="form.email">{{form.emailTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.email.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.emailTitle}}は必須)</small>
  <input 
  name="form.email" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control-danger': $v.form.email.$error, 
        'form-control-success': !$v.form.email.$invalid 
        }"
  v-model.trim="form.email" 
  @blur="$v.form.email.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.email">
	  	メールアドレス<br>
        <strong>{{form.email}}</strong>
      </template>
      <template v-else>
       メールアドレスをご記入ください。（必須項目です）
      </template>

	</div>
</div>




<div class="row">

<div class="col-md-6 form-group" 
  :class="{ 'has-danger': $v.form.phone.$error, 'has-success': !$v.form.phone.$invalid }" >
  <label class="form-control-label" for="form.phone">{{form.phoneTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.phone.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.phoneTitle}}は必須)</small>
  <input 
  name="form.phone" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control-danger': $v.form.phone.$error, 
        'form-control-success': !$v.form.phone.$invalid 
        }"
  v-model.trim="form.phone" 
  @blur="$v.form.phone.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">

	  <template v-if="form.phone">
	  	電話<br>
        <strong>{{form.phone}}</strong>
      </template>
      <template v-else>
       電話番号をご記入ください。（必須項目です）
      </template>

	</div>
</div>






<div class="row">

<div class="col-md-6">
<label><span>連絡方法:&nbsp;&nbsp;</span></label>
<br>
<label class="custom-control custom-radio">

  <input type="radio" name="form.prefer" value="byemail" v-model="form.prefer" class="custom-control-input">

  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">{{form.preferTitleEmail}}</span>
</label>

<label class="custom-control custom-radio">

  <input type="radio" name="form.prefer" value="byphone" v-model="form.prefer" class="custom-control-input">

  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">{{form.preferTitlePhone}}</span>
</label>

<label><span>を優先する</span></label>
</div>

	<div class="col-md-5 table-inverse-gray memo hidden-sm-down">
	連絡方法<br>
	
	  <template v-if="form.prefer == 'byemail'">
        <strong>{{ form.preferTitleEmail }}</strong>
      </template>
      <template v-else>
        <strong>{{ form.preferTitlePhone }}</strong>
      </template>
      <span>を優先する</span>


	</div>
</div>







<!--
// <button 
//   type="submit" 
//   class="btn btn-primary" 
//   @click.prevent="validateBeforeSubmit(form)"> 
//   &nbsp;&nbsp;&nbsp;送信&nbsp;&nbsp;&nbsp;
// </button>
-->






<!--

<h5>フォーム確認:</h5>
<table class="table table-sm table-inverse-gray">

  <tbody>
    <tr>
      <td class="w-25 showTitle">取扱メーカー:</td>
      <td class="w-75 showMessage">{{form.selectedMaker}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">商品カテゴリー:</td>
      <td class="w-75 showMessage">{{form.selectedCategory}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">商品:</td>
      <td class="w-75 showMessage">{{form.selectedProduct}}</td>
    </tr>

    <tr>
      <td class="w-25 showTitle">{{form.companyTitle}}:</td>
      <td class="w-75 showMessage">{{form.company}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">{{form.deptTitle}}:</td>
      <td class="w-75 showMessage">{{form.dept}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">{{form.nameTitle}}:</td>
      <td class="w-75 showMessage">{{form.name}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">{{form.furiganaTitle}}:</td>
      <td class="w-75 showMessage">{{form.furigana}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">{{form.emailTitle}}:</td>
      <td class="w-75 showMessage">{{form.email}}</td>
    </tr>
    <tr>
      <td class="w-25 showTitle">{{form.phoneTitle}}:</td>
      <td class="w-75 showMessage">{{form.phone}}</td>
    </tr>

    <tr>
      <td class="w-25 showTitle">連絡方法:</td>
      <td>

      <template v-if="form.prefer == 'byemail'">
        {{ form.preferTitleEmail }}
      </template>
      <template v-else>
        {{ form.preferTitlePhone }}
      </template>
      <span>を優先する</span>
      </td>
    </tr>

    <tr>
      <td class="w-25 showTitle">{{form.messageTitle}}:</td>
      <td class="w-75 showMessage">{{form.message}}</td>
    </tr>
  </tbody>
</table>

-->



<br>



<section class="button-demo my-1 py-0">
  <button 
    class="ladda-button btn btn-primary" 
    data-size="m" 
    data-color="blue" 
    data-style="expand-right" 
    type="submit"
    @click.prevent="validateBeforeSubmit(form, $v)"
    >
    <span class="ladda-label">&nbsp;&nbsp;&nbsp;&nbsp;送信&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span class="ladda-spinner"></span>
  </button>
</section>




</div>







<template v-if="form.operationSuccess" v-model="form.operationSuccess">
<div role="alert"  class="alert alert-success mt-4">
お問い合わせ頂きありがとうございました。<br>
後日、こちらからご連絡をさせていただきます。 何かご質問やご不明な点などございましたら いつでもEメール、電話でご連絡をお願いいたします。
</div>
</template>


<!--
for testing:
<pre>operationSuccess: {{operationSuccess}}</pre>
<button @click.prevent="operationSuccess = !operationSuccess">Switch</button>
-->

<!--
<pre>
{{$v.form}}
</pre>
-->


<br><br>
</form>



`,
  data: function() {
    return {

      // product variables
      
      


      form: {

        //show: true,


        categories: [],
        products: [],
        selectedMaker: '',
        selectedCategory: '',
        selectedProduct: '',

        catalog: {
          "株式会社ミツトヨ": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"],
            "Category 3": ["C3-Product 1", "C3-Product 2", "C3-Product 3", "C3-Product 4", "C3-Product 5"],
            "Category 4": ["C4 Product 1"],
            "Category 5": ["C1-Product 1", "C1-Product 2", "C1-Product 3"]
          },
          "日本精工株式会社(NSK)": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"],
            "Category 3": ["C3-Product 1", "C3-Product 2", "C3-Product 3", "C3-Product 4", "C3-Product 5"]
          },
          "株式会社タンガロ": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"],
            "Category 3": ["C3-Product 1", "C3-Product 2", "C3-Product 3", "C3-Product 4", "C3-Product 5"],
            "Category 4": ["C4 Product 1"]
          },
          "株式会社不二越": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"],
            "Category 3": ["C3-Product 1", "C3-Product 2", "C3-Product 3", "C3-Product 4", "C3-Product 5"],
            "Category 4": ["C4 Product 1"],
            "Category 5": ["C1-Product 1", "C1-Product 2", "C1-Product 3"]
          },
          "日東工器株式会社": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"],
            "Category 3": ["C3-Product 1", "C3-Product 2", "C3-Product 3", "C3-Product 4", "C3-Product 5"],
            "Category 4": ["C4 Product 1"]
          },
          "株式会社キト": {
            "Category 1": ["C1-Product 1", "C1-Product 2", "C1-Product 3", "C1-Product 4"],
            "Category 2": ["C2-Product 1", "C2-Product 2", "C2-Product 3"]
          }
        },



        operationSuccess: false,

        // set up form variables here
        company: '',
        companyTitle: '会社名',

        dept: '',
        deptTitle: '部署名',

        name: '',
        nameTitle: 'お名前',

        furigana: '',
        furiganaTitle: 'ふりがな',

        email: '',
        emailTitle: 'メールアドレス',

        phone: '',
        phoneTitle: '電話',

        prefer: 'byemail',
        preferTitleEmail: 'メール',
        preferTitlePhone: '電話',

        message: '',
        messageTitle: 'メッセージ'

      }
    }
  }, // end of data


  validations: {
    form: {  

      company: {
        // required
      },
      dept: {
        // required
      },
      name: {
        required
      },
      furigana: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      prefer: {
        required
      },
      message: {

      }

    } // end of form object

  }, // end of validations


  methods: {


    validateBeforeSubmit(form, $v) {

      this.$v.form.$touch(); // update validation

      if (this.$v.form.$invalid) {
        //console.log('form is invalid: 1 ERROR');
        
      } else if (!this.$v.form.$invalid) {

        this.submitForm(form, $v);

      }
    },



    submitForm(form, $v) {

      // ladda button setup
      var l = Ladda.create(document.querySelector('.ladda-button'));
      l.start();


      // function resetForm() {
      //   console.log('resetForm');
      //   //$v.form.$reset();
      // }



      function makeRequest() {
        return new Promise(function (resolve, reject) {

          var xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://jiko.000webhostapp.com/jquery-form/mozilla.php', true); // mozilla.php process.php
          xhr.withCredentials = false;

          xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
            } else {
              reject({
                status: this.status,
                statusText: xhr.statusText
              });
            }
          };
          xhr.onerror = function () {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          };

          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

          xhr.send(encodeURI( 
              '&company='+ form.company 
            + '&dept='+form.dept 
            + '&name='+form.name 
            + '&furigana='+form.furigana
            + '&email='+form.email 
            + '&phone='+form.phone

            + '&picked'+form.picked

            + '&message='+form.message
            + '&selectedMaker='+form.selectedMaker
            + '&selectedCategory='+form.selectedCategory 
            + '&selectedProduct='+form.selectedProduct   
          ));  
        })
      }

      
      makeRequest()

      .then(function (datums) {

        console.log('TEST');

        // ladda button
        l.stop();

        // assume successful submission, clear fields and vuelidator messages
        form.company = '';
        form.dept = '';
        form.name = '';
        form.furigana = '';
        form.email = '';
        form.phone = '';
        form.message = '';
        form.prefer = '';
        form.selectedMaker = '';
        form.selectedProduct = '';
        form.selectedCategory = '';

        $v.form.$reset();


        // have to preset again the prefer field:
        form.prefer =  'byemail',

      //form.$reset(); // update validation
      //$v.form.$reset();

        form.operationSuccess = true;
        console.log("form.operationSuccess is " + this.operationSuccess);
        
        // resetForm();

        return makeRequest();

      })
      .catch(function (err) {
        console.error('There was an error! / ', err);
      });

    },





  },  // end of methods

  computed: { },

  watch: {

    'form.selectedMaker': function (form) {
      // Clear previously selected values
      this.form.categories = [];
      this.form.products = [];
      this.form.selectedCategory = "";
      this.form.selectedProduct = "";

      // Populate list of categories in the second dropdown
      console.log("form.selectedMaker.length TEST: " + this.form.selectedMaker.length);
      if (this.form.selectedMaker.length > 0) {
        this.form.categories = this.form.catalog[this.form.selectedMaker]
      }
    },
    'form.selectedCategory': function (form) {
      // Clear previously selected values
      this.form.products = [];
      this.form.selectedProduct = "";

      // Now we have a category and product. Make a list of products in the last dropdown
      if (this.form.selectedCategory.length > 0) {
        this.form.products = this.form.catalog[this.form.selectedMaker][this.form.selectedCategory]
      }
    },
    'form.selectedProduct': function (form) {
      console.log(this.form.selectedProduct);
    }

  }




});