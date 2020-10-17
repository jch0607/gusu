<template>
    <div>
       <!-- <mt-header title="giao" fixed>
           <p slot="left">
            <mt-button icon="back" type="primary">
                <img src="../../assets/image/homepage.png" slot="icon">1111
            </mt-button>
           </p>
           <div slot="right">
                <mt-button icon="more" type="primary"></mt-button>
           </div>
           </mt-header>
           <div style="padding-top:40px;">
           <p v-for="(v,k) of 50" :key="k">胖胖吃奥利给的第{{v}}天</p>
        </div> -->
        <mt-header title="giao" fixed>
            <p slot="left">
                <mt-button icon="back" type="primary">
                    <img src="../../assets/image/homepage.png" slot="icon">1111
                </mt-button>
            </p>
            <div slot="right">
             <mt-button icon="more" type="primary"></mt-button>
            </div>
            <p v-for="(i,k) of 50" :key="k">{{i}}</p>
        </mt-header>
        </div>
        
</template>