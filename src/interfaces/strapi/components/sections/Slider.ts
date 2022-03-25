import { Components } from '../../../../enums/Components';
import Image from '../../Image';
import { ResponseData } from '../../Response';

export default interface ComponentSlider {
  __component: Components.Slider;
  id: number;
  images: { data: ResponseData<Image>[] };
}
