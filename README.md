# P2P 서비스 데모

P2P 서비스의 웹 클라이언트 프로젝트 입니다.

* 민감한 내용은 삭제하거나, 수정하였습니다.
* 임의의 데이터를 입력, 시연이 가능한 정도로 수정하였습니다.
* 로컬에서 동작이 가능합니다만, 코드 중 일부에서 REST API(axios)의 사용 예를 확인 할 수 있습니다.
* 일부 화면은 제공 되지 않습니다.

## 라이브러리

* nuxt.JS
* Bootstrap
* Bootstrap-vue
* nuxt-i18n
* axios
* moment
* cookie universal nuxt
* Vue CSS Donut Chart
* Vue Daum Postcode
* Vue JS Modal
* Vue Password Strength Meter
* zxcvbn (for Vue Password Strength Meter)

## 기타 정보

* 페이지 중 아이디(이메일)와 암호가 필요한 곳이 있습니다.
* 이메일 및 암호는 아래와 같습니다.

> ```
> id(email): example@email.com
> password: password
> ```

* 휴대 전화 번호의 인증코드는 다음과 같습니다.

> ```
> 12345
> ```

* QnA에서 작성한 글이 로컬의 store에 저장되지 않습니다.

## 인스톨

```
npm install
```

## 빠른 확인

* python의 SimpleHTTPServer를 이용해 보세요(macOS).

```
cd public
python -m SimpleHTTPServer
```

### 개발을 위한 컴파일 및 핫로드

```
npm run dev
```

### 빌드

```
npm run build
```

### 린트 및 수정

```
npm run lint
```
