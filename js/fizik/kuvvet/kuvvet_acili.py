import math
# cisim başta durgun
gravity = 10
object_mass = 10
force = int(input("Enter the force :"))
force_time = 0.1
floor_c = 0.3

# P^2 / 2m = KE

momentum = force*force_time

start_ke = momentum*momentum / (2*object_mass)

angle = math.pi/6

# 280 = p^2/20

# üçgenin bilgileri
hypo = 5 # 345 üçgeni # aldığı yol

fraction_force = object_mass*gravity*math.cos(angle)*floor_c
work_fraction = fraction_force*hypo
work_gravity = object_mass * gravity * math.sin(angle) * hypo

total_work = work_fraction + work_gravity


if (start_ke - total_work) <= 0 :
    print("Cisim durdu")
else :
    print("Cism rampadan aştı")
    
    
#mgh 
#mg(1-cos(angle)) = ke = 1/2mV^2

# V = sqrt(2(mg(1-cos(angle)))/m)