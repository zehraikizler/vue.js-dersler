<template>
  <div class="card border p-3">
    <div class="d-flex justify-content-end my-2">
      <button
        class="btn btn-sm btn-primary"
        @click="$router.push({ name: 'NewBookMark' })"
      >
        + Yeni Ekle
      </button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bookmark, index) in bookmarkList" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ bookmark.title }}</td>
          <td>
            <a :href="bookmark.url" target="_blank"> {{ bookmark.url }} </a>
          </td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteBookmark(bookmark)"
            >
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((bookmarks_list_response) => {
      this.bookmarkList = bookmarks_list_response.data || [];
    });
  },
  methods: {
    deleteBookmark(bookmark) {
      this.$appAxios
        .delete(`/bookmarks/${bookmark.id}`)
        .then((delete_response) => {
          console.log(delete_response);
          if (delete_response.status === 200) {
            this.bookmarkList = this.bookmarkList.filter(
              (b) => b.id !== bookmark.id
            );
          }
        });
    },
  },
};
</script>
