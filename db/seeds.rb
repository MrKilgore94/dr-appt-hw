# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
d1 = Doctor.create(name:'Dr. Morbius')
d2 = Doctor.create(name:'Dr. Henry Jekyll')
d3 = Doctor.create(name:'Dr. Curt Connors')


p1 = Patient.create(name:'Eric Brooks')
p2 = Patient.create(name:'Edward Hyde')
p3 = Patient.create(name:'Peter Parker')

Appointment.create(date:'December 1st', doctor_id:d1.id, patient_id:p1.id)
Appointment.create(date:'December 5th', doctor_id:d2.id, patient_id:p2.id)
Appointment.create(date:'December 10th', doctor_id:d3.id, patient_id:p3.id)




