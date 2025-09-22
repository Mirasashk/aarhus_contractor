function Employee(
	id,
	name,
	firm,
	birthdate,
	buildSite,
	role,
	image,
	documents,
	notes,
	rating,
	qrCode,
	createdAt,
	updatedAt
) {
	this.id = id;
	this.name = name;
	this.firm = firm;
	this.birthdate = birthdate;
	this.buildSite = buildSite;
	this.role = role;
	this.image = image;
	this.documents = documents;
	this.notes = notes;
	this.rating = rating;
	this.qrCode = qrCode;
	this.createdAt = createdAt;
	this.updatedAt = updatedAt;
}

export default Employee;
