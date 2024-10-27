<template>
  <div class="home">
    <div class="bg-box"></div>
    <h1 class="title fade-in-section">
      {{ $t('hometitle1') }}
    </h1>
    <div class="content1 fade-in-section">
      <img src="@/assets/images/home_img1.png" alt="" class="left">
      <div class="right">
        <div class="part-title">
          {{ $t('hometitle2') }}
        </div>
        <p>
          {{ $t('homecontent2p1') }}
        </p>
        <p>
          {{ $t('homecontent2p2') }}
        </p>
      </div>
    </div>
    <div class="content2 fade-in-section">
      <div class="content2-content">
        <div class="part-title">
          {{ $t('hometitle3') }}
        </div>
        <p>
          {{ $t('homecontent3p1') }}
        </p>
      </div>
    </div>
    <div class="content3 fade-in-section">
      <div class="part-title">
        {{ $t('hometitle4') }}
      </div>
      <div class="content-list">
        <div class="list-item">
          <div class="item-title">
            {{ $t('homeContent4PartTitle1') }}
          </div>
          <p>
            {{ $t('homeContent4Part1') }}
          </p>
          <button>
            {{ $t('homeContent4More') }}
          </button>
        </div>
        <div class="list-item">
          <div class="item-title">
            {{ $t('homeContent4PartTitle2') }}
          </div>
          <p>
            {{ $t('homeContent4Part2') }}
          </p>
          <button>
            {{ $t('homeContent4More') }}
          </button>
        </div>
        <div class="list-item">
          <div class="item-title">
            {{ $t('homeContent4PartTitle3') }}
          </div>
          <p>
            {{ $t('homeContent4Part3') }}
          </p>
          <button>
            {{ $t('homeContent4More') }}
          </button>
        </div>

        <div class="list-item">
          <div class="item-title">
            {{ $t('homeContent4PartTitle4') }}
          </div>
          <p>
            {{ $t('homeContent4Part4') }}
          </p>
          <button>
            {{ $t('homeContent4More') }}
          </button>
        </div>
      </div>
    </div>
    <div class="content4 fade-in-section">
      <HorizontalScroll/>
    </div>
  </div>
</template>

<script>
import HorizontalScroll from "@/components/HorizontalScroll.vue";

export default {
  name: 'HomeView',
  components: {
    HorizontalScroll
  },
  mounted() {

    const fadeInSections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // 只触发一次，进入视口后不再观察
        }
      });
    }, {threshold: 0.1});  // 10% 可见时触发

    fadeInSections.forEach(section => observer.observe(section));
  }
};
</script>
<style scoped lang="scss">

.home {
  .content4 {
    padding: 68px 0;
  }

  .content3 {
    background: #fff;
    padding-bottom: 70px;
    background: linear-gradient(-45deg, rgba(#ee7752,0.3), rgba(#e73c7e,0.3), rgba(#23a6d5,0.3), rgba(#23d5ab,0.3));
    background-size: 400% 400%;
    animation: gradient 45s ease infinite;
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .part-title {
      font-family: Poppins, Poppins;
      font-size: 66px;
      color: #000000;
      line-height: 76px;
      text-align: center;
      padding-top: 68px;
    }

    .content-list {
      display: flex;
      width: 90%;
      max-width: 1200px;
      margin: 80px auto 0;
      justify-content: space-between;
      flex-wrap: wrap;

      .list-item {
        width: 49%;
        background: rgba(255, 255, 255, 0.65);
        border-radius: 11px 11px 11px 11px;
        padding: 60px 25px 120px;
        position: relative;
        margin-top: 20px;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #FFFFFF;
        cursor: pointer;


        .item-title {
          font-family: Poppins, Poppins;
          font-weight: 600;
          font-size: 27px;
          color: #000000;
          line-height: 30px;
          text-align: center;
          font-style: normal;
        }

        p {
          margin-top: 25px;
          font-family: DM Sans, DM Sans;
          font-weight: 400;
          font-size: 18px;
          color: #68718B;
          line-height: 25px;

        }

        button {
          margin: 50px auto;
          cursor: pointer;
          bottom: 0px;
          padding: 10px 30px;
          background: none;
          border-radius: 11px 11px 11px 11px;
          text-align: center;
          border: none;
          font-family: Poppins, Poppins;
          font-weight: 600;
          font-size: 18px;
          left: calc(50% - 90px);
          color: #333;
          position: absolute;

          &:active {
            transform: translate(5px, 5px);
          }
        }
      }
    }
  }

  .content2 {
    background: #F7F3FF;
    padding-bottom: 150px;

    .content2-content {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;

      .part-title {
        font-family: Poppins, Poppins;
        font-weight: 500;
        font-size: 54px;
        text-align: center;
        padding-top: 100px;
      }

      p {
        font-family: Poppins, Poppins;
        font-weight: 400;
        font-size: 24px;
        line-height: 38px;
        margin-top: 50px;
      }
    }
  }

  .title {
    width: 800px;
    margin: 120px auto 0;
    font-family: DM Sans, DM Sans;
    font-weight: 700;

    font-size: 60px;
    color: #FFFFFF;

    line-height: 66px;
    text-align: center;
    font-style: normal;
    position: relative;
    z-index: 1;
  }

  .content1 {
    position: relative;
    z-index: 1;
    width: 90%;
    max-width: 1200px;
    background: #FFFFFF;
    border-radius: 24px 24px 24px 24px;
    padding: 50px;
    display: flex;
    margin: 130px auto 0px;

    .left {
      width: 44%;
      height: auto;
    }

    .right {
      margin-left: 50px;

      p {
        line-height: 38px;
        margin-top: 45px;
        font-family: Poppins, Poppins;
        font-weight: 400;
        font-size: 22px;
        color: #8883A7;
      }

      .part-title {
        font-family: Poppins, Poppins;
        font-weight: 500;
        font-size: 60px;
        color: #000000;
        line-height: 64px;
        text-align: left;
        font-style: normal;
        margin: 60px 0 0 0px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .home {
    .content1, .content2 .content2-content, .content3 .content-list {
      width: 100%;
      padding: 0 40px;
      margin: 0 auto;
      flex-direction: column;
    }

    .title {
      width: 80%;
      font-size: 40px;
      line-height: 48px;
      margin: 80px auto 60px;
    }

    .content3 {
      .part-title {
        font-size: 40px;
        line-height: 50px;
        padding-top: 50px;
      }

      .content-list {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 60px;
        flex-wrap: wrap;

        .list-item {
          width: 45%;
          margin-bottom: 40px;

          button {
            width: 180px;
            height: 60px;
            font-size: 18px;
            line-height: 60px;
          }
        }
      }
    }

    .content2 {
      padding-bottom: 100px;

      .part-title {
        font-size: 40px;
        margin-top: 60px;
      }

      p {
        font-size: 20px;
        line-height: 30px;
        margin-top: 60px;
      }
    }

    .content1 {
      flex-direction: row;
      margin: 100px auto 0;
      padding: 30px;

      .left {
        width: 50%;
      }

      .right {
        width: 50%;
        margin-left: 20px;

        p {
          font-size: 20px;
          line-height: 28px;
        }

        .part-title {
          font-size: 32px;
          line-height: 30px;
          margin: 40px 0 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    .content1, .content2 .content2-content, .content3 .content-list {
      width: 100%;
      padding: 0 20px;
      margin: 0 auto;
      flex-direction: column;
    }

    .title {
      width: 90%;
    }

    .content3 {
      .part-title {
        font-size: 36px;
        line-height: 46px;
        padding-top: 40px;
      }

      .content-list {
        flex-direction: column;
        margin-top: 40px;

        .list-item {
          width: 100%;
          margin-bottom: 20px;

          button {
            width: 160px;
            height: 50px;
            font-size: 16px;
            bottom: 30px;
            line-height: 50px;
          }
        }
      }
    }

    .content2 {
      padding-bottom: 80px;


      .content2-content {
        font-size: 18px;

        .part-title {
          font-size: 36px;
          margin-top: 50px;
        }

        p {
          font-size: 18px;
          line-height: 28px;
          margin-top: 50px;
        }
      }

    }

    .title {
      font-size: 36px;
      line-height: 46px;
      margin-top: 60px;
    }

    .content1 {
      display: block;
      margin: 80px auto 0;
      padding: 20px;

      .left {
        width: 100%;
        height: auto;
      }

      .right {
        margin-left: 0;
        width: 100%;

        p {
          font-size: 18px;
          line-height: 28px;
        }

        .part-title {
          font-size: 36px;
          line-height: 46px;
          margin: 30px 0 0;
        }
      }
    }
  }
}

</style>
