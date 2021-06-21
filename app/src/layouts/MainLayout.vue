/* eslint-disable import/named */
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon :name="fabCog" color="red" size="28px" />
          <q-toolbar-title shrink class="text-weight-bold">
           Order App
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input filled bottom-slots v-model="search" label="Shop Location" dense  class="bg-white col">
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="arrow_drop_down" @click="text = ''" class="cursor-pointer" />
        </template>
          </q-input>
          <!-- <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated /> -->
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="video_call" v-if="$q.screen.gt.sm">
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm">
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item-label header class="text-weight-bold text-uppercase">
            Inventory
          </q-item-label>

          <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-xs" />

          <q-item-label header class="text-weight-bold text-uppercase">
            Statistics
          </q-item-label>

          <q-item v-for="link in links3" :key="link.text" v-ripple clickable active>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fasCogs } from '@quasar/extras/fontawesome-v5'
let fabCog
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      fabCog,
      links1: [
        { icon: 'home', text: 'Home' },
        { icon: 'list_alt', text: 'Order Upcoming' },
        { icon: 'calendar_view_month', text: 'Confirmed Order' },
        { icon: 'local_shipping', text: 'Delivery Form' },
        { icon: 'history', text: 'Archives' }
      ],
      links2: [
        { icon: 'other_houses', text: 'Catalogue' },
        { icon: 'redeem', text: 'Promotions' },
        { icon: 'import_export', text: 'Import from Square' }
      ],
      links3: [
        { icon: 'assessment', text: 'Delivery Man' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' }
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' }
      ]
    }
  },
  created () {
    this.fabCog = fasCogs
  }
}
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
