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
            What it’s all about
          </div>
          <div class="part-title">
            What is the Internet Computer
          </div>
          <p>
            The Internet Computer adds autonomous serverless cloud functionality to the public internet-making it
            possible to build almost any system or service entirely on a decentralized network using “canister software”
            ，an evolution of smart contracts.y.
          </p>
          <div class="what-list">
            <div class="list-item">
              <img src="@/assets/images/item_icon.png" alt="" class="item-icon">
              <div class="name">
                Tamperproof
              </div>
            </div>
            <div class="list-item">
              <img src="@/assets/images/item_icon.png" alt="" class="item-icon">
              <div class="name">
                Sovereign
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="part-title">
            Created by ∞ ICP
          </div>
          <p>
            The Internet Computer is created by ICP, the most advanced network protocol ever devised. It enables people
            to
            build Web3 services and enterprise systems directly on a public decentralized network, which scales even to
            hosting social networks and media streaming. Hosted services are tamperproof, don’t need firewalls, support
            Web3 functionality, and can trustlessly interact with the outside world.
          </p>

        </div>
      </div>
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
      }

      .right {
        padding: 130px 5%;
        width: 44%;
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
</style>
<script setup>
</script>