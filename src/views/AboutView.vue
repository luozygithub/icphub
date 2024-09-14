<template>
  <div class="about">
    <div class="title">
      {{$t("aboutTitle")}}
    </div>
    <div class="content1">
      <img src="@/assets/images/home_img1.png" alt="" class="left">
      <div class="right">
        <div class="part-title">
          {{$t("aboutContent1title")}}
        </div>
        <p>
          {{ $t('aboutContentP') }}
        </p>
      </div>
    </div>
    <div class="content2">
      <div class="content2-content">
        <div class="left">
          <div class="part-tip">
            {{$t("aboutContent3Tip")}}
          </div>
          <div class="part-title">
            {{$t("aboutContent3LeftTitle")}}
          </div>
          <p>
            {{$t("aboutContent3LeftP")}}
          </p>
          <div class="what-list">
            <div class="list-item" v-for="(item) in 6" :key="item">
              <img src="@/assets/images/item_icon.png" alt="" class="item-icon">
              <div class="name">
                {{$t("aboutContent3LeftItem"+(item))}}
              </div>
            </div>
          </div>
          <button>
            {{$t("aboutContent3LeftButton")}}
          </button>
        </div>
        <div class="right">
          <div class="part-title">
            {{$t("aboutContent3RightTitle")}}
          </div>
          <p>
            {{$t("aboutContent3RightP")}}
          </p>

        </div>
      </div>
    </div>
    <div class="content3">
      <div class="content3-content">
        <div class="part-tip">
          {{$t("aboutContent4Tip")}}
        </div>
        <div class="part-title">
          {{$t("aboutContent4Title")}}
        </div>
        <div class="lists">
          <div class="item">
            <div class="value">
              270<span>+</span>
            </div>
            <div class="name">
              {{$t("aboutContent4Item1")}}
            </div>
          </div>
          <div class="item">
            <div class="value">
              1600<span>+</span>
            </div>
            <div class="name">
              {{$t("aboutContent4Item2")}}
            </div>
          </div>
          <div class="item">
            <div class="value">
              100<span>K+</span>
            </div>
            <div class="name">
              {{$t("aboutContent4Item3")}}
            </div>
          </div>
          <div class="item">
            <div class="value">
              250<span>+</span>
            </div>
            <div class="name">
              {{$t("aboutContent4Item4")}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content4">
      <div class="part-tip">
        {{$t("aboutContent5Tip")}}
      </div>
      <div class="part-title">
        {{$t("aboutContent5TittlePart1")}}
      </div>
      <div class="btns">
        <div class="btn">
          {{$t("aboutContent5Button1")}}
        </div>
        <div class="btn">
          {{$t("aboutContent5Button2")}}
        </div>
      </div>
    </div>
    <div class="content5" >
      <HorizontalScroll></HorizontalScroll>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  .title {
    margin: 120px auto 75px;
    width: 806px;
    word-break: break-all;
    font-family: DM Sans, DM Sans;
    font-weight: 700;
    font-size: 60px;
    color: #FFFFFF;
    line-height: 66px;
    text-align: center;
    font-style: normal;
  }
  .content4{
    background: #FAF8FF;
    text-align: center;
    padding: 88px 0 77px;
    .part-tip{
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 23px;
      color: #9190B0;
      line-height: 24px;
    }
    .part-title{
      font-family: DM Sans, DM Sans;
      font-weight: 700;
      font-size: 56px;
      color: #14358A;
      line-height: 77px;
      margin-top: 20px;
    }
    .btns{
      display: flex;
      justify-content: center;
      margin-top: 45px;
      .btn{
        width: 220px;
        height: 62px;
        border-radius: 11px 11px 11px 11px;
        border: 1px solid;
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 18px;
        line-height: 25px;
        text-align: left;
        display: flex;

        justify-content: center;
        align-items: center;
        &:nth-child(1){
          background: #000000;
          color: #FFFFFF;
        }
        &:nth-child(2){
          color: #6A36FF;
          margin-left: 50px;
          background: none;
          border: 1px solid #6A36FF;

        }
      }

    }
  }
  .content5{
    padding: 68px 0;
  }
  .content3{
    background: linear-gradient( 133deg, #A2A1FF 0%, #D5D4FF 100%);
    border-radius: 0px 0px 0px 0px;
    padding: 110px 0;
    .content3-content{
      width: 1274px;
      max-width: 100%;
      border-radius: 24px 24px 24px 24px;
      margin:  0 auto;
      .part-tip{
        font-size: 41px;
        color: #FFFFFF;
        text-align: center;
      }
      .part-title{
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 72px;
        text-align: center;
        margin-top: 72px;
        color: #FFFFFF;
      }
      .lists{
        display: flex;
        justify-content: space-between;
        margin-top: 72px;
        .item{
          .value{
            font-weight: 500;
            font-size: 90px;
            color: #FFFFFF;
            line-height: 119px;
            span{
              color: #7e43f8;
            }
          }
          .name{
            font-family: PingFang SC, PingFang SC;
            font-weight: 400;
            font-size: 27px;
            color: #FFFFFF;
            text-align: center;
            line-height: 28px;
          }
        }
      }
    }
  }
  .content1 {
    width: 1274px;
    max-width: 100%;
    background: #FFFFFF;
    border-radius: 24px 24px 24px 24px;
    padding: 52px;
    display: flex;
    margin: 158px auto 0px;

    .left {
      width: 44%;
      height: auto;
    }

    .right {
      margin-left: 50px;

      p {
        line-height: 38px;
        margin-top: 45px;

        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 24px;
        color: #8883A7;
      }

      .part-title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 60px;
        color: #000000;
        line-height: 64px;
        text-align: left;
        font-style: normal;
        margin: 60px 0 0 30px;
      }
    }
  }

  .content2 {
    background: #F7F3FF;
    padding: 65px 0 100px;
    .content2-content {
      width: 1274px;
      background: #F7F3FF;
      max-width: 100%;
      margin: 0 auto;
      display: flex;

      .part-title {
        font-family: PingFang SC, PingFang SC;
        font-weight: 500;
        font-size: 54px;
        color: #000000;
        line-height: 57px;
        margin-top: 38px;
      }

      p {
        font-family: PingFang SC, PingFang SC;
        font-weight: 400;
        font-size: 24px;
        color: #6B6A6F;
        line-height: 40px;
        text-align: left;
        font-style: normal;
        text-transform: none;
        margin-top: 38px;
      }

      .left {
        width: 56%;
        padding-right: 5%;
        .part-tip {
          font-family: PingFang SC, PingFang SC;
          font-size: 27px;
          color: #8483A7;
          line-height: 28px;
          margin-top: 65px;
        }
        .what-list{
          display: flex;
          margin-top: 30px;
          flex-wrap: wrap;
          .list-item{
            display: flex;
            align-items: center;
            margin-bottom: 50px;
            width: 50%;
            .item-icon{
              width: 32px;
              height: 32px;
            }
            .name{
              font-family: PingFang SC, PingFang SC;
              font-weight: 400;
              font-size: 20px;
              color: #000000;
              line-height: 28px;
              margin-left: 20px;
            }
          }
        }
        button{
          width: 297px;
          height: 77px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 9px 9px 9px 9px;
          border: 2px solid #6A36FF;
          font-family: PingFang SC, PingFang SC;
          font-weight: 600;
          background: none;
          cursor: pointer;
          font-size: 23px;
          color: #6A36FF;
          line-height: 24px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }

      .right {
        padding: 130px 5%;
        width: 44%;
        border-radius: 14px 14px 14px 14px;
        background: linear-gradient( 136deg, #9F9FFF 0%, #D4B9FF 61%, #FFFFFF 120%);
        .part-title {
          color: #FFFFFF;
        }

        p {
          color: #FFFFFF;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .about {
    .title {
      width: 90%;
      font-size: 32px;
      line-height: 40px;
      margin: 60px auto 40px;
    }

    .content4 {
      padding: 50px 0;
      .part-tip {
        font-size: 16px;
        line-height: 20px;
      }
      .part-title {
        font-size: 28px;
        line-height: 36px;
        margin-top: 10px;
      }
      .btns {
        flex-direction: column;
        align-items: center;
        .btn {
          width: 80%;
          height: 50px;
          font-size: 16px;
          margin-left: 0!important;
          &:nth-child(2) {
            margin-top: 20px;
          }
        }
      }
    }

    .content5 {
      padding: 40px 0;
    }

    .content3 {
      padding: 50px 0;
      .content3-content {
        width: 90%;
        .part-tip {
          font-size: 24px;
        }
        .part-title {
          font-size: 32px;
          margin-top: 30px;
        }
        .lists {
          flex-direction: column;
          align-items: center;
          margin-top: 40px;
          .item {
            margin-top: 20px;
            .value {
              font-size: 48px;
              line-height: 60px;
            }
            .name {
              font-size: 18px;
              line-height: 24px;
            }
          }
        }
      }
    }

    .content1 {
      flex-direction: column;
      margin: 80px auto 0;
      padding: 20px;
      .left {
        width: 100%;
      }
      .right {
        width: 100%;
        margin-left: 0;
        p {
          font-size: 18px;
          line-height: 28px;
        }
        .part-title {
          font-size: 28px;
          line-height: 36px;
          margin: 30px 0 0;
        }
      }
    }

    .content2 {
      padding: 40px 0;
      .content2-content {
        flex-direction: column;
        padding: 0 20px;
        .left {
          width: 100%;
          padding-right: 0;
          .part-tip {
            font-size: 18px;
            margin-top: 30px;
          }
          .what-list {
            .list-item {
              width: 100%;
              margin-bottom: 20px;
              .name {
                font-size: 16px;
              }
            }
          }
          button {
            width: 100%;
            height: 50px;
            font-size: 18px;
          }
        }
        .right {
          width: 100%;
          padding: 30px;
          margin-top: 30px;
          .part-title {
            font-size: 24px;
          }
          p {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

</style>
<script >
import HorizontalScroll from "@/components/HorizontalScroll.vue";
export default {
  components:{
    HorizontalScroll
  }
}
</script>