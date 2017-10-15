"use strict";

Vue.use(window.vuelidate["default"]);
var _window$validators = window.validators;
var required = _window$validators.required;
var email = _window$validators.email;

// above is ES5 for ios9 browsers

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

  <div class="col-md-6 form-check-inline">
    <label><span>連絡方法:&nbsp;&nbsp;</span></label>
    <br>
    <div class="form-check form-check-inline">


      <label class="form-check-label">
        <input type="radio" id="byemail" value="byemail" v-model="form.prefer" class="form-check-input">
        <span class="custom-control-description">{{form.preferTitleEmail}}</span>
      </label>

      <span>&nbsp;&nbsp;</span>

      <label class="form-check-label">
        <input type="radio" id="byphone" value="byphone" v-model="form.prefer" class="form-check-input">
        <span class="custom-control-description">{{form.preferTitlePhone}}</span>
      </label>

      <label class="form-check-label"><span>を優先する</span></label>

    </div>
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


<section class="button-demo my-1 py-0">
  <button 
    class="ladda-button btn btn-primary" 
    data-size="m" 
    data-color="blue" 
    data-style="expand-right" 
    type="submit"
    @click.prevent="validateBeforeSubmit(form, $v)"
    >
    <span class="ladda-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
<pre>{{ $v }}</pre>
-->

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


        // selected: "true",

        prefer: 'byemail',


        preferTitleEmail: 'メール',
        preferTitlePhone: '電話',

        message: '',
        messageTitle: 'メッセージ',


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


          "伝導機器":[
          "NSK",
          "NTN",
          "THK",
          "日本トムソン",
          "(株)椿本チェイン",
          "旭精工(株)",
          "青木精密(株)",
          "オイレス工業(株)",
          "オザック精工(株)",
          "オリエンタルモーター(株)",
          "小原歯車(株)",
          "協育歯車工業(株)",
          "鍋屋バイテック会社",
          "(株)イマオコーポレーション",
          "住友重機械工業(株)",
          "(株)ツバキ・ナカシマ",
          "大同メタル工業(株)",
          "東洋ゴム工業(株)",
          "三菱電機(株)",
          "(株)日立産機システム",
          "日本特殊ベアリング(株)",
          "ミネベアミツミ(株)",
          "SEWオイロドライブジャパン(株)",
          "(株)ニッセイ",
          "NOK(株)",
          "小倉クラッチ(株)",
          "片山チエン(株)",
          "TOHO(株)",
          "(株)マキシンコー",
          "三木プーリー(株)"
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
          "(株)KDS",
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


          "作業工具": [
          "旭金属工業(株)",
          "京都機械工具(株)",
          "(株)スーパーツール",
          "スナップオンツールズ(株)",
          "トップ工業(株)",
          "TONE(株)",
          "ノガジャパン(株)",
          "PBｽｲｽﾂｰﾙ(株)",
          "(株)ベッセル",
          "ボンダスジャパン(株)",
          "水戸工機(株)",
          "(株)ロブテックス",
          "(株)MCCコーポレーション",
          "ヒット商事(株)",
          "フジ矢(株)",
          "三木ネツレン(株)",
          "室本鉄工(株)",
          "大阪角田工業(株)",
          "オーエッチ工業(株)"
          ],


          "輸送機器 (マテハン)": [
          "(株)メイキコウ",
          "オークラ輸送機(株)",
          "(株)マキテック",
          "(株)キトー",
          "象印チェンブロック(株)",
          "(株)富士製作所",
          "ハンマーキャスター(株)",
          "(株)ナンシン",
          "内村キャスター(株)",
          "花岡車両(株)",
          "(株)スギヤス",
          "(株)岡本工機",
          "(株)永瀬工場",
          "田村総業(株)",
          "東レ(株)",
          "伊藤鋳工(株)",
          "(株)ピカコーポレーション",
          "アルインコ(株)",
          "イーグル・クランプ(株)",
          "(株)フリーベアコーポレーション",
          "(株)をくだ屋技研"
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
          ],


          "空気油圧機器類": [
          "(株)TAIYO",
          "SMC(株)",
          "CKD(株)",
          "クロダニューマチック(株)",
          "ボッシュ・レックスロス(株)",
          "ダイキン工業(株)",
          "(株)不二越",
          "アズビルTACO(株)",
          "豊興工業(株)",
          "ニッタ(株)",
          "イハラサイエンス(株)",
          "横浜ゴム(株)",
          "(株)ブリジストン",
          "パーカー・ハネフィン日本(株)",
          "オリオン機械(株)",
          "コベル・ココンプレッサ(株)",
          "三井精機工業(株)",
          "アネスト岩田(株)",
          "油研工業(株)",
          "(株)日本ピスコ",
          "(株)千代田精機",
          "(株)妙徳",
          "日本精機(株)"
          ],


          "工作機械": [
          "(株)相澤鉄工所",
          "(株)池貝",
          "(株)宇都宮製作所",
          "エンシュウ(株)",
          "小川鉄工(株)",
          "オークマ(株)",
          "(株)岡本工作機械製作所",
          "(株)キラコーポレーション",
          "(株)紀和マシナリー",
          "コマツ産機(株)",
          "シチズンマシナリー(株)",
          "住友重機械工業(株)",
          "宝機械工業(株)",
          "(株)武田機械",
          "タケダ機械(株)",
          "(株)ツガミ",
          "東芝機械(株)",
          "(株)ナガセインテグレックス",
          "ファナック(株)",
          "(株)藤田製作所",
          "牧野フライス精機(株)",
          "三井精機工業(株)",
          "三菱重工業(株)",
          "DMG森精機(株)",
          "(株)山崎技研",
          "ヤマザキマザック(株)"
          ],


          "電動空気工具": [
          "アサダ(株)",
          "(株)泉精器製作所",
          "(株)オグラ",
          "亀倉精機(株)",
          "(株)空研",
          "コンパクトツール(株)",
          "サンコーミタチ(株)",
          "東空販売(株)",
          "(株)ナカニシ",
          "日東工器(株)",
          "パナソニック電動工具",
          "日立工機(株)",
          "ボッシュ(株)",
          "(株)マキタ",
          "(株)やまびこ",
          "(株)淀川電機製作所",
          "リョービ(株)",
          "レッキス工業(株)",
          "瓜生製作(株)",
          "日本ニューマチック工業(株)",
          "不二空気(株)",
          "UHT(株)",
          "ヨコタ工業(株)",
          "ミニター(株)"
          ]
        }

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
        //console.log('form is invalid: ERROR');
      } else if (!this.$v.form.$invalid) {
        this.submitForm(form, $v);
      }
    },


    submitForm(form, $v) {

      // ladda button setup
      var l = Ladda.create(document.querySelector('.ladda-button'));
      l.start();


      function makeRequest() {
        return new Promise(function (resolve, reject) {

          var xhr = new XMLHttpRequest();

         // xhr.open('POST', 'https://jiko.000webhostapp.com/jquery-form/process.php', true); // mozilla.php process.php

          xhr.open('POST', 'https://app-1507812654.000webhostapp.com/jquery_form/process.php', true); // mozilla.php process.php
                    
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
              '&company='+form.company 
            + '&dept='+form.dept 
            + '&name='+form.name 
            + '&furigana='+form.furigana
            + '&email='+form.email 
            + '&phone='+form.phone
            + '&prefer='+form.prefer
            + '&message='+form.message
            + '&selectedMaker='+form.selectedMaker
            + '&selectedCategory='+form.selectedCategory
          ));  

          // console.log('&message='+form.message);
          // console.log('&company='+form.company);
          // console.log('&dept='+form.dept);
          // console.log('&name='+form.name);
          // console.log('&furigana='+form.furigana);
          // console.log('&email='+form.email);
          // console.log('&phone='+form.phone);
          // console.log('&prefer='+form.prefer);
          // console.log('&selectedMaker='+form.selectedMaker);
          // console.log('&selectedCategory='+form.selectedCategory);

        })
      }



      makeRequest()

      .then(function (datums) {

        // ladda button
        l.stop();

        // assume successful submission, clear fields and vuelidator messages
        // keep value for form.prefer since we prefer a default value for it
        
        // GB KEEP OFF WHEN DEBUGGING
        form.company = '';
        form.dept = '';
        form.name = '';
        form.furigana = '';
        form.email = '';
        form.phone = '';
        form.message = '';
        form.selectedMaker = '';
        form.selectedCategory = '';

        $v.form.$reset();

        form.operationSuccess = true;

        // console.log("form.operationSuccess is " + form.operationSuccess);
        
        return makeRequest();

      })
      .catch(function (err) {
        // console.error('There was an error! / ', err);
      });

    },

  },  // end of methods

  computed: { },

  watch: {

    'form.selectedMaker': function (form) {
      // Clear previously selected values
      this.form.categories = [];
      // this.form.products = [];
      this.form.selectedCategory = "";
      // this.form.selectedProduct = "";

      // Populate list of categories in the second dropdown
      console.log("form.selectedMaker.length TEST: " + this.form.selectedMaker.length);
      if (this.form.selectedMaker.length > 0) {
        this.form.categories = this.form.catalog[this.form.selectedMaker]
        // console.log("Test 1 - Category:" + this.form.categories );
      }
    },

    'form.selectedCategory': function (form) {
      // Clear previously selected values
      // this.form.products = [];
      // this.form.selectedProduct = "";
        // console.log("Test 2 - Maker:" + this.form.selectedCategory );

    },

  }

});