<script >
export default {

}
</script>

<template>
<div class="footer">
  <div class="footer-content">
    <div class="part1">
      <img src="@/assets/images/logo_bottom.png" alt="" class="logo">
      <div class="right-content">
        <div class="part-title">
          {{$t('Subscribe to our newsletter')}}
        </div>
        <div class="email">
          <input :placeholder="$t('email')" type="text">
          <button> {{$t('Submit')}}</button>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="left">
        <a href="#">{{$t('About Us')}} </a>
        <a href="#"> {{$t('About ICP')}} </a>
      </div>
      <div class="right">
        team@District 7.io
      </div>
    </div>
    <div class="part3">
      <div class="left">
        © 2024 District 7 - ICP.HUB NETWORK <br/>All Rights Reserved
      </div>
      <div class="right">
        <div class="link-list">
          <div class="list-item">
            <a href=""><img src="@/assets/images/webside.png" alt=""></a>
          </div>
          <div class="list-item">
            <a href=""><img src="@/assets/images/facebook.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.footer{
  width: 100%;
  padding: 70px 0 0px;
  background: linear-gradient( 70deg, #F1F0FD 0%, #B9BAFF 100%);
  .footer-content{
    width: 1274px;
    max-width: 100%;
    margin: 0 auto;
    .part3{
      display: flex;
      padding: 20px 0 40px;
      justify-content: space-between;
      .left{
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 18px;
        line-height: 36px;
        color: #999999;
      }
      .right{
        .link-list{
          display: flex;
          .list-item{
            margin-left: 20px;
            a{
              width: 36px;
              height: 36px;
              //border-radius: 3px ;
              //display: flex;
              //justify-content: center;
              //align-items: center;
              //background: rgba(255, 255, 255, 0.21);
              img{
                width: 36px;
                height: 36px;
              }
            }
          }
        }
      }
    }
    .part2{
      display: flex;
      padding: 40px 0;
      border-top:  1px solid rgba(149, 149, 149, 0.52);;
      border-bottom:  1px solid rgba(149, 149, 149, 0.52);
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 18px;
      color: #000000;
      justify-content: space-between;
      a{
        text-decoration: none;
        color: #000000;
        margin-right: 50px;
      }
    }
    .part1{
      display: flex;
      justify-content: space-between;
      padding-bottom: 120px;
      .right-content{
        .part-title{
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          font-size: 27px;
          color: #000000;
          line-height: 36px;
          margin-top: 18px;
        }
        .email{
          margin-top: 30px;
          input{
            width: 509px;
            height: 88px;
            background: #FFFFFF;
            border-radius: 14px 14px 14px 14px;
            border: 1px solid #8687DF;
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 23px;
            line-height: 30px;
            padding-left: 16px;
            text-align: left;
            &::placeholder{
              color: #777777;
            }
          }
          button{
            width: 127px;
            height: 88px;
            background: #7E8AFD;
            border-radius: 14px 14px 14px 14px;
            margin-left: 18px;
            border: none;
            font-family: DM Sans, DM Sans;
            font-weight: 700;
            font-size: 23px;
            color: #FFFFFF;
          }
        }

      }
    }
  }
  .logo{
    width: 260px;
    height: 60px;
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
    .footer-content {
      width: 100%;
      padding: 0 20px;

      .part1, .part2, .part3 {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .part1 {
        .right-content {
          .email {
            display: flex;
            input {
              width: 100%;
              height: 50px;
              font-size: 18px;
            }
            button {
              width: 100px;
              height: 50px;
              font-size: 18px;
            }
          }
        }
      }

      .part2 {
        padding: 20px 0;
        flex-direction: column;
        a {
          margin: 0 20px 20px;
        }
        .right{
          margin-top: 20px;
        }
      }

      .part3 {
        flex-direction: column;
        padding: 20px 0;
        .right {
          margin-top: 20px;
          .link-list {
            justify-content: center;
            .list-item {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  .logo {
    width: 200px;
    height: auto;
  }
}

</style>