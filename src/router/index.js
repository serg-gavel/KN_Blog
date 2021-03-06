import Vue from 'vue'
import Router from 'vue-router'
import MainSection from '@/components/MainSection'
import BlogSection from '@/components/BlogSection'
import ServicesSection from '@/components/ServicesSection'
import CooperationSection from '@/components/CooperationSection'
import AboutSection from '@/components/AboutSection'
import PostInner from '@/components/PostInner'
import AddPost from '@/components/AddPost'
import BlogSectionTwo from '@/components/BlogSectionTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',
      name: 'MainSection',
      component: MainSection
    },
    {path: '/blog',
      name: 'BlogSection',
      component: BlogSection
    },
    {path: '/services',
      name: 'ServicesSection',
      component: ServicesSection
    },
    {path: '/cooperation',
      name: 'CooperationSection',
      component: CooperationSection
    },
    {path: '/about',
      name: 'AboutSection',
      component: AboutSection
    },
    {path: '/add_post',
      name: 'AddPost',
      component: AddPost
    },
    {path: '/blog/:id',
      name: 'PostInner',
      component: PostInner
    },
    {path: '/blog',
      name: 'BlogSectionTwo',
      component: BlogSectionTwo
    }
  ]
  // mode: 'history'
})
