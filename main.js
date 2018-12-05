import UserList from './components/UserList.js';
import Kanban from './components/Kanban.js';

new Vue({
    el:'#app',
    name: 'App',
    data() {
      return {
        stages: [],
        blocks: [],
      };
    },
    components: {
      UserList, Kanban
    },
    created() {
      this.getStages();
    },
    methods: {
      getStages(){
       this.stages = ['on-hold', 'in-progress', 'needs-review', 'approved'];
       this.blocks = [
        {
          id: 1,
          status: 'on-hold',
          title: 'Test',
        },
        {
          id: 2,
          status: 'in-progress',
          title: 'Test2',
        },
      ];
      },
    },
    template: `
      <div class="container mx-auto p-4">
        <Kanban :stages="stages" :blocks="blocks" class="mt-6"></Kanban>
      </div>
    `,
})

