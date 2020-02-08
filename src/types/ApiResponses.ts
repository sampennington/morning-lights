export type Contents = Content[];

type Content = {
  id: number;
  name: string;
  title: string;
  body: string;
};

export type InstagramImagesResponse = {
  data: {
    graphql: {
      user: {
        edge_owner_to_timeline_media: {
          edges: Array<InstagramImage>;
        };
      };
    };
  };
};

export type InstagramImage = {
  node: {
    thumbnail_src: string;
    id: string;
    accessibility_caption: string;
  };
};
