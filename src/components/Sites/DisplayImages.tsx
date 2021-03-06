export interface DisplayImagesProps {
  images: [];
}

const DisplayImages: React.FC<DisplayImagesProps> = (images) => {
  const results: any = images;
  let imgs: any;

  if (results.images.length > 0) {
    imgs = results.images.map((image: any) => {
      console.log("img", image);

      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

      return <img key={id} src={url} alt={title} />;
    });
    return imgs;
  }
  return null;
};

export default DisplayImages;
