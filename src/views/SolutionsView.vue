<template>
  <div class="about">
    <div class="part1">
      <div class="sub-title">
        {{ $t('solutionPart1Title1') }}
      </div>
      <div class="title">
        {{ $t('solutionPart1Title2') }}
      </div>
    </div>
    <div class="part2">
      <div class="content-list">
        <div class="list-item">
          <div class="title">
            {{ $t('solutionPart2Title1') }}
          </div>
          <p>
            {{ $t('solutionPart2Content11') }}
          </p>
          <p>
            {{ $t('solutionPart2Content12') }}
          </p>
        </div>
        <div class="list-item">
          <div class="title">
            {{ $t('solutionPart2Title2') }}
          </div>
          <p>
            {{ $t('solutionPart2Content21') }}
          </p>
          <p>
            {{ $t('solutionPart2Content22') }}
          </p>
        </div>

        <div class="list-item">
          <div class="title">
            {{ $t('solutionPart2Title3') }}
          </div>
          <p>
            {{ $t('solutionPart2Content31') }}
          </p>
          <p>
            {{ $t('solutionPart2Content32') }}
          </p>
        </div>
        <div class="list-item">
          <div class="title">
            {{ $t('solutionPart2Title4') }}
          </div>
          <p>
            {{ $t('solutionPart2Content41') }}
          </p>
          <p>
            {{ $t('solutionPart2Content42') }}
          </p>
        </div>
      </div>
    </div>
    <div class="part3">
      <button>
        {{ $t("Apply Today") }}
      </button>
      <p>
        {{ $t("solutionPart3") }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.about {
  .part3 {
    padding: 100px 0;

    button {
      width: 357px;
      height: 104px;
      border-radius: 14px 14px 14px 14px;
      border: 1px solid #6A36FF;
      margin-left: calc(50% - 177px);
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 41px;
      color: #6A36FF;
      line-height: 43px;
      background: none;
      text-align: center;
    }

    p {
      width: 1071px;
      height: 55px;
      font-family: DM Sans, DM Sans;
      font-weight: 400;
      font-size: 20px;
      color: #68718B;
      line-height: 27px;
      margin: 0 auto;
      margin-top: 25px;

    }
  }

  .part2 {
    width: 100%;

    .content-list {
      display: flex;
      flex-wrap: wrap;


      .list-item {
        width: 50%;
        padding: 120px 70px;
        background: #F3EEFF;



        .title {
          font-family: DM Sans, DM Sans;
          font-weight: 700;
          font-size: 54px;
          color: #000000;
          line-height: 57px;
          margin-bottom: 20px;
        }

        p {
          font-family: PingFang SC, PingFang SC;
          font-weight: 400;
          font-size: 26px;
          color: #777777;
          line-height: 41px;
        }

        &:nth-child(2),&:nth-child(3)  {
          background: linear-gradient(139deg, #9F9FFF 0%, #D4B9FF 93%, #FFFFFF 120%);

          .title {
            color: #FFFFFF;
          }

          p {
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .part1 {
    margin: 110px 0;

    .sub-title {
      text-align: center;
      font-family: DM Sans, DM Sans;
      font-weight: 500;
      font-size: 36px;
      color: #FFFFFF;
      line-height: 40px;
    }

    .title {
      font-family: DM Sans, DM Sans;
      font-weight: 700;
      font-size: 68px;
      color: #FFFFFF;
      text-align: center;
      margin-top: 20px;
    }
  }
}

@media (max-width: 768px) {
  .about {
    .part3 {
      padding: 50px 0;

      button {
        width: 80%;
        height: 60px;
        font-size: 20px;
        line-height: 30px;
        margin-left: calc(10%);
      }

      p {
        width: 90%;
        font-size: 16px;
        line-height: 24px;
        margin-top: 15px;
      }
    }

    .part2 {
      .content-list {
        .list-item {
          width: 100%;
          padding: 40px 20px;

          .title {
            font-size: 32px;
            line-height: 36px;
            margin-bottom: 15px;
          }

          p {
            font-size: 18px;
            line-height: 28px;
          }
        }
      }
    }

    .part1 {
      margin: 60px 0;

      .sub-title {
        font-size: 24px;
        line-height: 28px;
      }

      .title {
        font-size: 36px;
        margin-top: 15px;
      }
    }
  }
}

</style>
<script setup>
</script>
