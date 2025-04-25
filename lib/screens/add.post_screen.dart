














class _addPostScreenState extends State<AddPostScreen>{

}



























Future<void> _getLocation() async{
  bool serviceEnable;
  LocationPermission permission;

  serviceEnable = await Geolocator.islocationServiceEnable();
  if (!serviceEnable)
}


