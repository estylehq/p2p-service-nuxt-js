<template>
  <div class="cs-info">
    <h6>고객센터 운영안내</h6>
    <ul>
      <li>
        <a href="tel:+8215440000"><i class="fa fa-phone"></i>1544-0000</a>
      </li>
      <li>
        <a href="mailto:help@p2pservice.kr"
          ><i class="fa fa-envelope-o"></i>help@p2pservice.kr</a
        >
      </li>
      <li><i class="fa fa-fax"></i>000-0000-0000</li>
      <li><i class="fa fa-clock-o"></i>평일 10시 ~ 18시 (점심 12시 ~ 13시)</li>
    </ul>
  </div>
</template>

<style scoped>
div.cs-info {
  padding: 16px;
}

h6 {
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 16px;
}

ul {
  font-size: 0.8rem;
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 0;
}

ul > li {
  margin-bottom: 8px;
}

ul > li:last-child {
  margin-bottom: 0;
}

ul a {
  color: inherit;
}

li i.fa {
  margin-right: 8px;
}

@media (max-width: 768px) {
  div.cs-info {
    padding: 16px 24px;
  }
}
</style>
