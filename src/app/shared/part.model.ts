export class Part {
  constructor(
    public number: string,
    public name: string,
    public imgPath: string | null, // might come as null from API
    public amount: number
  ) {}
}

// Response from API
// {
//   "count": 1,
//   "next": null,
//   "previous": null,
//   "results": [
//     {
//       "part_num": "3298mia",
//       "name": "Minitalia Slope 33° 3 x 2 with Bottom X Supports",
//       "part_cat_id": 3,
//       "part_url": "https://rebrickable.com/parts/3298mia/minitalia-slope-33-3-x-2-with-bottom-x-supports/",
//       "part_img_url": "https://cdn.rebrickable.com/media/parts/photos/2/3298mia-2-94cdd67a-5f98-463a-b440-46d183bb7222.jpg",
//       "external_ids": {
//         "BrickLink": [
//           "3298miA"
//         ],
//         "BrickOwl": [
//           "683281"
//         ]
//       },
//       "print_of": null
//     }
//   ]
// }
