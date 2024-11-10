---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/smanitech.png',
    name: 'Suraj Mani',
    title: 'Community Organizer',
    links: [
      { icon: 'github', link: 'https://github.com/smanitech' },
      { icon: 'twitter', link: 'https://twitter.com/smanitech' }
    ]
  },
  {
    avatar: 'https://github.com/BRAVO68WEB.png',
    name: 'Jyotirmoy Bandyopadhayaya',
    title: 'Project Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/BRAVO68WEB' },
      { icon: 'vercel', link: 'https://b68.dev' }
    ]
  },
  {
    avatar: 'https://github.com/Ba3a-G.png',
    name: 'Aryan Kumar',
    title: 'Project Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/Ba3a-G' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ba3a' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
        Meet the team behind the project.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>