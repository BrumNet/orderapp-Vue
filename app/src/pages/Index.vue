<template>
  <q-layout>
  <q-page>
  <div  class="q-pa-sm">
  <div> <q-icon name="home" /></div>
  Products
  <q-card style="min-hieght: 2000px">
  <div class="q-pa-md">
  <div  class="q-gutter-y-md row" style="max-width: 1000px">
    <div class = 'col'>
       <q-input outlined bottom-slots v-model="search" label="Search" counter :dense="dense">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click="text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          SKU name
        </template>
      </q-input>
      </div>
      <div class='col'>
        <q-checkbox v-model="right" label="include inactive" color="primary" />
      </div>
    </div>
  <div  class="q-pt-sm">
    <q-btn outline color="primary" icon="exit_to_app" label="Import New Sku(s)" />
  </div>
  </div>
  <div class="q-pt-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left bg-secondary text-white" >No</th>
          <th class="text-left bg-primary text-white" style="min-width: 280px">Catalog</th>
          <th class="text-left bg-secondary text-white">Color</th>
          <th class="text-right bg-secondary text-white">Size</th>
          <th class="text-right bg-secondary text-white">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr
         v-for="(data, index) in myJson" :key="index">
          <td class="text-left">{{data.id}}</td>
          <td class="text-left">{{data.catalog_name}}</td>
          <td class="text-left">{{data.color}}</td>
          <td class="text-right">{{data.size}}</td>
          <td class="text-right">{{data.quantity}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
  </q-card>
  </div>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="refresh" color="primary" />
          </q-page-sticky>
  </q-page>
</q-layout>
</template>

<script>
import { axiosInstance } from 'boot/axios'
export default {
  data () {
    return {
      myJson: this.myJson, // enable cors
      right: false,
      dense: true,
      search: ''
    }
  },
  mounted () {
    axiosInstance.get('/products')
      .then(response => {
        this.myJson = response.data.data
      })
      .catch(error => console.log('Error', error.message))
  }
}
</script>
