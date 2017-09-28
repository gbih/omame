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
   <label class="form-control-label">商品カテゴリー</label>
    <select  id="one" class="custom-select form-control" v-model="form.selectedMaker">
      <option class="form-control" value="">商品カテゴリーの選択</option>
      <option class="form-control" v-for="(category_key, category_val) in form.catalog" :value="category_val" :key="category_key">{{category_val}}</option>
    </select>
  </div>


	<div class="col-md-5 table-inverse-gray memo d-none d-sm-none    d-md-block d-lg-block d-xl-block">
	  <template v-if="form.selectedMaker">
      商品カテゴリー<br>
      <strong>{{ form.selectedMaker }}</strong>
      </template>
      <template v-else>
      商品カテゴリーを選択してください。<br>
      商品カテゴリー以外は[メッセージ]にご記入してください。
      </template>

	</div>
</div>






<div class="row">

  <div class="col-md-6 dropdown form-group">
    <label class="form-control-label">取扱メーカー</label>
    <select   class="custom-select form-control" :disabled="form.categories.length == 0" v-model="form.selectedCategory">
      <option class="form-control" value="">取扱メーカーの選択</option>
      <option class="form-control" v-for="product_key in form.categories" :key="product_key">{{product_key}}</option>
    </select>
  </div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">


	  <template v-if="form.selectedCategory">
        取扱メーカー<br>
        <strong>{{ form.selectedCategory }}</strong>
      </template>
      <template v-else>
      取扱メーカーを選択してください。<br>
       取扱メーカー以外は[メッセージ]にご記入してください。
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

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
	  :class="{ 'invalid-feedback': $v.form.company.$error, 
	  'was-validated': !$v.form.company.$invalid && $v.form.company.$dirty }" 
	  >
	  <label class="form-control-label" for="form.company">{{form.companyTitle}}</label>
	    <small v-if="$v.form.company.$error" class="form-control-feedback"> &nbsp; &nbsp;({{form.companyTitle}}は必須)</small>
	  
	  <input 
	  name="form.company" 
	  type="text" 
	  class="form-control"
	  :class="{ 
	        'invalid': $v.form.company.$error, 
	        'form-control-success': !$v.form.company.$invalid && $v.form.company.$dirty
	        }"
	  v-model.trim="form.company" 
	  @blur="$v.form.company.$touch()"
	  >
	</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
  'was-validated': !$v.form.dept.$invalid && $v.form.dept.$dirty}" 
  >
  <label class="form-control-label" for="form.dept">{{form.deptTitle}}</label>
  <small v-if="$v.form.dept.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.deptTitle}}は必須)</small>
  <input 
  name="form.dept" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control is-invalid': $v.form.dept.$error, 
        'form-control is-valid': !$v.form.dept.$invalid && $v.form.dept.$dirty
        }"
  v-model.trim="form.dept" 
  @blur="$v.form.dept.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
  :class="{ 'is-invalid': $v.form.name.$error, 'was-validated': !$v.form.name.$invalid }" >
  <label class="form-control-label" for="form.name">{{form.nameTitle}}  <small>【必須】</small></label>
  <small v-if="$v.form.name.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.nameTitle}}は必須)</small>
  <input 
  name="form.name" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control is-invalid': $v.form.name.$error, 
        'form-control is-valid': !$v.form.name.$invalid 
        }"
  v-model.trim="form.name" 
  @blur="$v.form.name.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
  :class="{ 'has-danger': $v.form.furigana.$error, 'was-validated': !$v.form.furigana.$invalid }" >
  <label class="form-control-label" for="form.furigana">{{form.furiganaTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.furigana.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.furiganaTitle}}は必須)</small>
  <input 
  name="form.furigana" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control is-invalid': $v.form.furigana.$error, 
        'form-control is-valid': !$v.form.furigana.$invalid 
        }"
  v-model.trim="form.furigana" 
  @blur="$v.form.furigana.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
  :class="{ 'has-danger': $v.form.email.$error, 'was-validated': !$v.form.email.$invalid }" >
  <label class="form-control-label" for="form.email">{{form.emailTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.email.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.emailTitle}}は必須)</small>
  <input 
  name="form.email" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control is-invalid': $v.form.email.$error, 
        'form-control is-valid': !$v.form.email.$invalid 
        }"
  v-model.trim="form.email" 
  @blur="$v.form.email.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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
  :class="{ 'has-danger': $v.form.phone.$error, 'was-validated': !$v.form.phone.$invalid }" >
  <label class="form-control-label" for="form.phone">{{form.phoneTitle}} <small>【必須】</small></label>
  <small v-if="$v.form.phone.$error" class="form-control-feedback">&nbsp; &nbsp;({{form.phoneTitle}}は必須)</small>
  <input 
  name="form.phone" 
  type="text" 
  class="form-control"
  :class="{ 
        'form-control is-invalid': $v.form.phone.$error, 
        'form-control is-valid': !$v.form.phone.$invalid 
        }"
  v-model.trim="form.phone" 
  @blur="$v.form.phone.$touch()"
  >
</div>

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">

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

	<div class="col-md-5 table-inverse-gray memo  d-none d-sm-none    d-md-block d-lg-block d-xl-block">
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
          
"鋲螺(ネジ)類": [
"日本鋲螺(株)", 
"(株)ヒラノファステック", 
"松金工業(株)", 
"ヨット印・ダイワ", 
"(株)協栄製作所",
"ヨット印・ダイワ",
"(株)協栄製作所",
"金剛鋲螺(株)",
"濱中ナット販売(株)",
"江浦製作所",
"日本ファスナー",
"アンブラコ",
"極東製作所",
"光精工(株)",
"岸和田ステンレス",
"東和工業(株)",
"中村螺子(株)",
"松本ナット工業(株)",
"紀州ファスナー",
"(株)冨士精密(Uナット)",
"西精工(株)",
"ケーエム精工(株)"
],


"測定工具": [
"愛知時計電機(株)",
"安立計器(株)",
"(株)エーアンドディ",
"新潟精機(SK)",
"(株)オーツカ光学",
"大西測定工具製作所",
"(株)大場精機製作所",
"(株)オーバル",
"(株)大菱計器製作所",
"(株)岡野製作所",
"(株)尾崎製作所",
"(株)小野測器",
"オリンパス(株)",
"(株)ガステック",
"カネテック(株)",
"(株)中村製作所",
"(株)クボタ",
"(株)ＫＤＳ",
"新コスモス電機(株)",
"シンワ測定(株)",
"測範社(株)",
"ソニープレシジョンテクノロジー(株)",
"(株)第一計器製作所",
"(株)第一測範製作所",
"(株)田中衡機工業所",
"(株)チノー",
"(株)テクロック",
"東海産業(株)",
"東京計装(株)",
"(株)東京精密",
"(株)東日製作所",
"(株)トプコン",
"長野計器(株)",
"日油技研工業(株)",
"日本フローセル(株)",
"(株)ミツトヨ",
"山田照明(株)",
"(株)山本電機製作所",
"横河M&C",
"ライン精機(株)",
"理研計器(株)"
],



"切削工具類": [
"イスカルジャパン",
"(株)宇都宮製作所",
"(株)エスケーシー",
"エヌティーツール(株)",
"エフピーツール(株)",
"オーエスジー(株)",
"岡崎精工(株)",
"(株)岡部工具製作所",
"グーリングジャパン",
"ケナメタルジャパン",
"京セラ(株)",
"高周波精密(株)",
"(株)三興製作所",
"住友電工ハードメタル",
"(株)第一ツール",
"ダイジェット工業",
"(株)タンガロイ",
"(株)東鋼",
"(株)ニコテック",
"日本特殊陶業(株)",
"(株)ハイカット",
"(株)不二越",
"フクダ精工",
"三菱日立ツール(株)",
"三菱マテリアル(株)",
"(株)ミヤナガ",
"ユニカ(株)"
]

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
      // this.form.selectedProduct = "";

      // Populate list of categories in the second dropdown
      console.log("form.selectedMaker.length TEST: " + this.form.selectedMaker.length);
      if (this.form.selectedMaker.length > 0) {
        this.form.categories = this.form.catalog[this.form.selectedMaker]
        console.log("Test 1 - Category:" + this.form.categories );

      }
    },
    'form.selectedCategory': function (form) {
      // Clear previously selected values
      this.form.products = [];
      this.form.selectedProduct = "";
        console.log("Test 2 - Maker:" + this.form.selectedCategory );
      // Now we have a category and product. Make a list of products in the last dropdown
      // if (this.form.selectedCategory.length > 0) {
      //   this.form.products = this.form.catalog[this.form.selectedMaker][this.form.selectedCategory]
      //   console.log("HERE2:" + this.form.products );
      // }

    },
    // 'form.selectedProduct': function (form) {
    //   console.log(this.form.selectedProduct);
    // }

  }




});