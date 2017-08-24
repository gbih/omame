var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var messages = {
  after: function after(field, _ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var target = _ref2[0];
    return field + 'は' + target + 'の後でなければなりません';
  },
  alpha_dash: function alpha_dash(field) {
    return field + 'は英数字とハイフン、アンダースコアのみ使用できます';
  },
  alpha_num: function alpha_num(field) {
    return field + 'は英数字のみ使用できます';
  },
  alpha_spaces: function alpha_spaces(field) {
    return field + 'はアルファベットと空白のみ使用できます';
  },
  alpha: function alpha(field) {
    return field + 'はアルファベットのみ使用できます';
  },
  before: function before(field, _ref3) {
    var _ref32 = _slicedToArray(_ref3, 1);

    var target = _ref32[0];
    return field + 'は' + target + 'よりも前でなければなりません';
  },
  between: function between(field, _ref4) {
    var _ref42 = _slicedToArray(_ref4, 2);

    var min = _ref42[0];
    var max = _ref42[1];
    return field + 'は' + min + 'から' + max + 'の間でなければなりません';
  },
  confirmed: function confirmed(field) {
    return field + 'が一致しません';
  },
  credit_card: function credit_card(field) {
    return field + 'が正しくありません';
  },
  date_between: function date_between(field, _ref5) {
    var _ref52 = _slicedToArray(_ref5, 2);

    var min = _ref52[0];
    var max = _ref52[1];
    return field + 'は' + min + 'から' + max + 'の間でなければなりません';
  },
  date_format: function date_format(field, _ref6) {
    var _ref62 = _slicedToArray(_ref6, 1);

    var format = _ref62[0];
    return field + 'は' + format + '形式でなけれななりません';
  },
  decimal: function decimal(field) {
    var _ref7 = arguments.length <= 1 || arguments[1] === undefined ? ['*'] : arguments[1];

    var _ref72 = _slicedToArray(_ref7, 1);

    var decimals = _ref72[0];
    return field + 'は整数及び小数点以下' + (decimals === '*' ? '' : decimals) + '桁までの数字にしてください';
  },
  digits: function digits(field, _ref8) {
    var _ref82 = _slicedToArray(_ref8, 1);

    var length = _ref82[0];
    return field + 'は' + length + '桁の数字でなければなりません';
  },
  dimensions: function dimensions(field, _ref9) {
    var _ref92 = _slicedToArray(_ref9, 2);

    var width = _ref92[0];
    var height = _ref92[1];
    return field + 'は幅' + width + 'px、高さ' + height + 'px以内でなければなりません';
  },
  email: function email(field) {
    return field + 'は有効なメールアドレスではありません';
  },
  ext: function ext(field) {
    return field + 'は有効なファイル形式ではありません';
  },
  image: function image(field) {
    return field + 'は有効な画像形式ではありません';
  },
  'in': function _in(field) {
    return field + 'は有効な値ではありません';
  },
  ip: function ip(field) {
    return field + 'は有効なIPアドレスではありません';
  },
  max: function max(field, _ref10) {
    var _ref102 = _slicedToArray(_ref10, 1);

    var length = _ref102[0];
    return field + 'は' + length + '文字以内にしてください';
  },
  max_value: function max_value(field, _ref11) {
    var _ref112 = _slicedToArray(_ref11, 1);

    var max = _ref112[0];
    return field + 'は' + max + '以下でなければなりません';
  },
  mimes: function mimes(field) {
    return field + 'は有効なファイル形式ではありません';
  },
  min: function min(field, _ref12) {
    var _ref122 = _slicedToArray(_ref12, 1);

    var length = _ref122[0];
    return field + 'は' + length + '文字以上でなければなりません';
  },
  min_value: function min_value(field, _ref13) {
    var _ref132 = _slicedToArray(_ref13, 1);

    var min = _ref132[0];
    return field + 'は' + min + '以上でなければなりません';
  },
  not_in: function not_in(field) {
    return field + 'は不正な値です';
  },
  numeric: function numeric(field) {
    return field + 'は数字のみ使用できます';
  },
  regex: function regex(field) {
    return field + 'が正しくありません';
  },
  required: function required(field) {
    return field + 'は必須項目です';
  },
  size: function size(field, _ref14) {
    var _ref142 = _slicedToArray(_ref14, 1);

    var _size = _ref142[0];
    return field + 'は' + _size + 'KB以内でなければなりません';
  },
  url: function url(field) {
    return field + 'が正しくありません';
  }
};


const locale = {
    name: 'ja',
    messages,
    attributes: {}
};

if (typeof VeeValidate !== 'undefined' && VeeValidate && typeof VeeValidate.Validator) {
    VeeValidate.Validator.addLocale(locale);
}


const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields', 
  delay: 100, 
  locale: 'ja', 
  dictionary: null, 
  strict: true, 
  enableAutoClasses: false, 
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true
};



Vue.use(VeeValidate, config);


// Use a new method on the global Vue object.
// .use tells Vue to add a plugin to the core VueJS functionality.
// So, the core VueJS functionality is now extended.

// Vue.use(VueResource);


VeeValidate.Validator.extend('passphrase', {
    getMessage: function getMessage(field) {
        return 'Sorry, please try again.';
    },
    validate: function validate(value) {
        return value.toUpperCase() == 'Demogorgon'.toUpperCase();
    }
});

new Vue({
  el: '#app',
  template: `
<form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted" id="myForm" class="shake">


<div class="cascading-dropdown">

  <div class="dropdown form-group">
   <label>取扱メーカー:</label>
    <select v-model="selectedMaker" class="form-control form-control-md">
      <option value="">取扱メーカーの選択</option>
      <option v-for="(category_key, category_val) in catalog" :value="category_val" :key="category_key">{{category_val}}</option>
    </select>
  </div>

  <div class="dropdown form-group">
    <label>商品カテゴリー:</label>
    <select :disabled="categories.length == 0" v-model="selectedCategory" class="form-control form-control-md">
      <option value="">商品カテゴリーの選択</option>
      <option v-for="(product_key, product_val) in categories" :key="product_key">{{product_val}}</option>
    </select>
  </div>

  <div class="dropdown form-group">
    <label>商品:</label>
    <select :disabled="products.length == 0" v-model="selectedProduct" class="form-control form-control-md">
      <option value="">商品の選択</option>
      <option v-for="product_key in products" :key="product_key">{{product_key}}</option>

    </select>
  </div>

</div>



<br>

<div class="card text-center">
  <div class="card-header">
    <h4>手入力（自由入力フォーム</h4>
  </div>
  <div class="card-block">
    <p class="card-text">
      ○○○社・○○○商品・○○○個について 取扱メーカー商品以外の商品や機械についても ご気軽にお問合せください。
    </p>
  </div>
</div>

<br>


<div class="form-group" :class="{ 'has-danger': errors.has('company'), 'has-success': fields.company && fields.company.valid }">
  <label class="control-label" for="email">会社名</label>
    <input 
    v-model="company"
    v-validate.initial="{ rules: { required: true } }" 
    type="text" 
    name="company" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('company'), 'form-control-success': fields.company && fields.company.valid }"
    >
    <i v-show="errors.has('company')" class="fa fa-warning small"></i>
    <small v-show="errors.has('company')" class="text-danger help is-danger">{{ errors.first('company') }}</small>
</div>


<div class="form-group" :class="{ 'has-danger': errors.has('dept'), 'has-success': fields.dept && fields.dept.valid }">
  <label class="control-label" for="email">部署名</label>
    <input 
    v-model="dept"
    v-validate.initial="{ rules: { required: true } }" 
    type="text" 
    name="dept" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('dept'), 'form-control-success': fields.dept && fields.dept.valid }"
    >
    <i v-show="errors.has('dept')" class="fa fa-warning small"></i>
    <small v-show="errors.has('dept')" class="text-danger help is-danger">{{ errors.first('dept') }}</small>
</div>


<div class="form-group" :class="{ 'has-danger': errors.has('name'), 'has-success': fields.name && fields.name.valid }">
  <label class="control-label" for="email">お名前</label>
    <input 
    v-model="name"
    v-validate.initial="{ rules: { required: true } }" 
    type="text" 
    name="name" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('name'), 'form-control-success': fields.name && fields.name.valid }"
    >
    <i v-show="errors.has('name')" class="fa fa-warning small"></i>
    <small v-show="errors.has('name')" class="text-danger help is-danger">{{ errors.first('name') }}</small>
</div>


<div class="form-group" :class="{ 'has-danger': errors.has('furigana'), 'has-success': fields.furigana && fields.furigana.valid }">
  <label class="control-label" for="email">ふりがな</label>
    <input 
    v-model="furigana"
    v-validate.initial="{ rules: { required: true } }" 
    type="text" 
    name="furigana" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('furigana'), 'form-control-success': fields.furigana && fields.furigana.valid }"
    >
    <i v-show="errors.has('furigana')" class="fa fa-warning small"></i>
    <small v-show="errors.has('furigana')" class="text-danger help is-danger">{{ errors.first('furigana') }}</small>
</div>


<div class="form-group" :class="{ 'has-danger': errors.has('email'), 'has-success': fields.email && fields.email.valid }">
  <label class="control-label" for="email">メールアドレス</label>
    <input 
    v-model="email"
    v-validate.initial="{ rules: { required: true, email: true } }" 
    type="text" 
    name="email" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('email'), 'form-control-success': fields.email && fields.email.valid }"
    >
    <i v-show="errors.has('email')" class="fa fa-warning small"></i>
    <small v-show="errors.has('email')" class="text-danger help is-danger">{{ errors.first('email') }}</small>
</div>


<div class="form-group" :class="{ 'has-danger': errors.has('phone'), 'has-success': fields.phone && fields.phone.valid }">
  <label class="control-label" for="email">電話</label>
    <input 
    v-model="phone"
    v-validate.initial="{ rules: { required: true } }" 
    type="text" 
    name="phone" 
    class="form-control"
    :class="{ 'form-control-danger' : errors.has('phone'), 'form-control-success': fields.phone && fields.phone.valid }"
    >
    <i v-show="errors.has('phone')" class="fa fa-warning small"></i>
    <small v-show="errors.has('phone')" class="text-danger help is-danger">{{ errors.first('phone') }}</small>
</div>





<label for="">連絡する方法:</label>
<div class="form-group">
  <label class="custom-control custom-checkbox">
    <input 
      id="byemail"
      name="byemail" 
      v-model="byemail"
      type="checkbox" 
      value="byemail"
      class="custom-control-input"
    >
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">メール</span>
  </label>

  <label class="custom-control custom-checkbox">
    <input 
      id="byphone"
      name="byphone" 
      v-model="byphone"
      type="checkbox" 
      value="byphone"
      class="custom-control-input"
      >
    <span class="custom-control-indicator"></span>
    <span class="custom-control-description">電話</span>
  </label>
</div>




<div class="form-group">
  <label for="message">メッセージ</label>
    <textarea 
    v-model="message"
    type="text" 
    name="message" 
    class="form-control"
    rows="5"
    >
    </textarea>
</div>


<hr>


<!--
<button type="submit" class="btn btn-primary"> 送信 </button>
-->


<section class="button-demo mb-4">
  <button class="ladda-button btn btn-primary" data-size="m" data-color="blue" data-style="expand-right" type="submit">
      <span class="ladda-label">  送信  </span>
      <span class="ladda-spinner"></span>
  </button>
</section>



<div id="msgSubmitContainer" class="hidden" role="alert">
    <div id="msgSubmitMessage" class="h4  py-2"></div>
</div>



<!--
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4>Your Data</h4>
    </div>
    <div class="panel-body">
    <ul>
        <li>Company: {{ company }}</li>
        <li>Dept: {{ dept }}</li>
        <li>Name: {{ name }}</li>
        <li>Furigana: {{ furigana }}</li>
        <li>Email: {{ email }}</li>
        <li>Phone: {{ phone }}</li>
        <li>Contact by Mail: {{ byemail }}</li>
        <li>Contact by Phone: {{ byphone }}</li>
        <li style="white-space: pre">Message: {{ message }}</li>
        <li>Selected Product: {{selectedProduct}}</li>
    </ul>
    </div>
  </div>
-->


</form>




`,
  data: function (event) {
    return {

      // button
      message: 'Hello Vue.js!',
      someData: [],

      activeClass: 'active',
      errorClass: 'has-danger',

      //company: 'Studio Omame',
      //dept: 'IT',
      //name: 'George Baptista',
      //furigana: 'ふりがな',
      //email: 'george@omame.com',
      //phone: '2345-2343',
      //message: 'This is a message',
      //byemail: 'yes',
      //byphone: 'yes',


      // company: '',
      // dept: '',
      // name: '',
      // furigana: '',
      // email: '',
      // phone: '',
      // message: '',
      // byemail: '',
      // byphone: '',
      formSubmitted: false,

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
      categories: [],
      products: [],
      selectedMaker: "",
      selectedCategory: "",
      selectedProduct: ""
    }
  },

   created: function () {
      this.company = 'Studio Omame',
      this.dept= 'IT',
      this.name= 'George Baptista',
      this.furigana= 'ふりがな',
      this.email= 'george@omame.com',
      this.phone= '2345-2343',
      this.message= 'This is a message',
      this.byemail= 'yes',
      this.byphone= 'yes'
   },


  watch: {
    selectedMaker: function () {
      // Clear previously selected values
      this.categories = [];
      this.products = [];
      this.selectedCategory = "";
      this.selectedProduct = "";
      // Populate list of categories in the second dropdown
      if (this.selectedMaker.length > 0) {
        this.categories = this.catalog[this.selectedMaker]
      }
    },
    selectedCategory: function () {
      // Clear previously selected values
      this.products = [];
      this.selectedProduct = "";
      // Now we have a continent and country. Populate list of products in the third dropdown
      if (this.selectedCategory.length > 0) {
        this.products = this.catalog[this.selectedMaker][this.selectedCategory]
      }
    },
    selectedProduct: function () {
      console.log(this.selectedProduct);
    }
  },


  methods: {


    reset: function() {
      this.user = {
        email: ''
      };
      this.$validator.clean();
    },

    validateBeforeSubmit(event) {
        var _this = this;

        this.$validator.validateAll().then(function (result) {
            if (!_this.errors.any()) {
                //console.log('inside validateBeforeSubmit');
                //console.log(`event: ${event}`);
                _this.submitForm();
            }
        });
    },


    submitForm: function() {

      // ladda button setup
      var l = Ladda.create(document.querySelector('.ladda-button'));
      l.start();

      company = this.company,
      dept = this.dept,
      name = this.name,
      furigana = this.furigana,
      email = this.email,
      phone = this.phone,
      byemail = this.byemail,
      byphone = this.byphone,
      message = this.message,
      selectedMaker = this.selectedMaker,
      selectedCategory = this.selectedCategory,
      selectedProduct = this.selectedProduct,
      message = this.message



     function myAsyncFunction() {
        return new Promise(function(resolve, reject) {
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://jiko.000webhostapp.com/jquery-form/mozilla.php', true); // mozilla.php process.php
          xhr.withCredentials = false;
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

          xhr.onload = function()  {
              if (xhr.status === 200) { 
                  
                   // resolve(alert(xhr.getAllResponseHeaders() +  '\nreadyState: ' + xhr.readyState + ' \nresponseText:' + xhr.responseText));

                  formSuccess();
                  //$("#numofnights").text("Number of Nights: 0");
                  l.stop();
                  // ScrollTop();
              }
              else if (xhr.status !== 200) {
                  
                  //reject(alert('Request failed / Returned status of ' + xhr.status));

                  alert('Request failed / Returned status of ' + xhr.status)
                  formError();
                  l.stop();
                  submitMSG(false, text);
                  // ScrollTop();
              }
          };

          xhr.onerror = function () {
            return reject(xhr.statusText);
          };

          xhr.send(encodeURI( 
              '&company='+company 
            + '&dept='+dept 
            + '&name='+name 
            + '&furigana='+furigana
            + '&email='+email 
            + '&phone='+phone
            + '&byemail='+byemail 
            + '&byphone='+byphone
            + '&message='+message
            + '&selectedMaker='+selectedMaker
            + '&selectedCategory='+selectedCategory 
            + '&selectedProduct='+selectedProduct   
          ));

        });
      };


    myAsyncFunction();


      function resetFields() {
        Object.assign(this.$data, this.$options.data.apply(this));
      }



      function formSuccess() {

          // GB no longer using jquery, so need to refactor this to either use Vue or raw JS
          $("#myForm")[0].reset();


          //resetFields();
          this.name = '';
          //console.log($("#myForm"));
          submitMSG(true, "後日、こちらからご連絡をさせていただきます。 何かご質問やご不明な点などございましたら いつでもEメール、電話でご連絡をお願いいたします。");
      }


      function formError() {
          $("#myForm")[0].reset();
          submitMSG(true, "There was an error with the contact form..");
      }


      function submitMSG(valid, msg){
        if(valid){
            var msgClasses = 'h3 text-center tada';
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
      }


      function submitMSG(valid, msg) {
        var msgClassesContainer = "";
          if (valid) {
              msgClassesContainer = "h3 alert alert-success mt-1";
          } else {
              msgClassesContainer = "h3 alert alert-danger";
          }

          $("#msgSubmitContainer").removeClass().addClass(msgClassesContainer);
          $("#msgSubmitMessage").text(msg);
      }


      function ScrollTop() {
          $('html,body').animate({scrollTop : 0},600);
      }


    }
  }
})
