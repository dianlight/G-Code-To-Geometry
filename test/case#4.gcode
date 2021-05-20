;FLAVOR:Marlin
;TIME:6542
;Filament used: 3.83603m
;Layer height: 0.2
;MINX:73.467
;MINY:91.252
;MINZ:0.2
;MAXX:140.037
;MAXY:128.746
;MAXZ:48
;Generated with Cura_SteamEngine 4.2.1
M140 S60
M105
M190 S60
M104 S210
M105
M109 S210
M82 ;absolute extrusion mode
M201 X500.00 Y500.00 Z100.00 E5000.00 ;Setup machine max acceleration
M203 X500.00 Y500.00 Z10.00 E50.00 ;Setup machine max feedrate
M204 P500.00 R1000.00 T500.00 ;Setup Print/Retract/Travel acceleration
M205 X8.00 Y8.00 Z0.40 E5.00 ;Setup Jerk
M220 S100 ;Reset Feedrate
M221 S100 ;Reset Flowrate

G28 ;Home

G92 E0 ;Reset Extruder
G1 Z2.0 F3000 ;Move Z Axis up
G1 X10.1 Y20 Z0.28 F5000.0 ;Move to start position
G1 X10.1 Y200.0 Z0.28 F1500.0 E15 ;Draw the first line
G1 X10.4 Y200.0 Z0.28 F5000.0 ;Move to side a little
G1 X10.4 Y20 Z0.28 F1500.0 E30 ;Draw the second line
G92 E0 ;Reset Extruder
G1 Z2.0 F3000 ;Move Z Axis up

M141 S28
G92 E0
G92 E0
G1 F3000 E-5
;LAYER_COUNT:240
;LAYER:0
M107
G0 F6000 X77.971 Y95.531 Z0.2
;TYPE:SKIRT
G1 F3000 E0
G1 F1200 X79.032 Y94.745 E0.04831
G1 X79.2 Y94.636 E0.05564
G1 X80.379 Y93.974 E0.10511
G1 X80.566 Y93.884 E0.1127
G1 X81.415 Y93.52 E0.14649
G1 X82.415 Y93.196 E0.18495
G1 X82.838 Y93.082 E0.20098
G1 X83.739 Y92.881 E0.23476
G1 X84.672 Y92.757 E0.26919
G1 X85.203 Y92.71 E0.28869
G1 X85.509 Y92.687 E0.29992
G1 X108.72 Y91.303 E1.15063
G1 X108.865 Y91.295 E1.15594
G1 X109.583 Y91.262 E1.18224
G1 X110.211 Y91.252 E1.20522
G1 X110.595 Y91.257 E1.21927
G1 X110.876 Y91.264 E1.22955
G1 X111.282 Y91.28 E1.24442
G1 X111.551 Y91.294 E1.25427
G1 X111.906 Y91.317 E1.26729
G1 X112.229 Y91.343 E1.27914
G1 X112.701 Y91.388 E1.29649
G1 X113.214 Y91.45 E1.3154
G1 X113.795 Y91.534 E1.33687
G1 X114.092 Y91.581 E1.34788

M140 S0
M141 S0
M107
G91 ;Relative positionning
G1 E-2 F2700 ;Retract a bit
G1 E-2 Z0.2 F2400 ;Retract and raise Z
G1 X5 Y5 F3000 ;Wipe out
G1 Z10 ;Raise Z more
G90 ;Absolute positionning

G1 X0 Y220 ;Present print
M106 S0 ;Turn-off fan
M104 S0 ;Turn-off hotend
M140 S0 ;Turn-off bed

M84 X Y E ;Disable all steppers but Z

M82 ;absolute extrusion mode
M104 S0
;End of Gcode
;SETTING_3 {"extruder_quality": ["[general]\\nversion = 4\\nname = Standard Qual
;SETTING_3 ity #2\\ndefinition = creality_base\\n\\n[metadata]\\nposition = 0\\n
;SETTING_3 setting_version = 8\\ntype = quality_changes\\nquality_type = standar
;SETTING_3 d\\n\\n[values]\\nbottom_layers = =999999 if infill_sparse_density ==
;SETTING_3  100 else math.ceil(round(bottom_thickness / resolveOrValue('layer_he
;SETTING_3 ight'), 4))\\ncool_fan_speed = 50\\ninfill_pattern = grid\\ninfill_sp
;SETTING_3 arse_density = 5\\nmaterial_print_temperature = 210\\nretraction_spee
;SETTING_3 d = 50\\nskirt_line_count = 2\\nspeed_print = 60\\nwall_line_count = 
;SETTING_3 =1 if magic_spiralize else max(1, round((wall_thickness - wall_line_w
;SETTING_3 idth_0) / wall_line_width_x) + 1) if wall_thickness != 0 else 0\\n\\n
;SETTING_3 "], "global_quality": "[general]\\nversion = 4\\nname = Standard Qual
;SETTING_3 ity #2\\ndefinition = creality_base\\n\\n[metadata]\\nsetting_version
;SETTING_3  = 8\\ntype = quality_changes\\nquality_type = standard\\n\\n[values]
;SETTING_3 \\nadhesion_type = skirt\\nmaterial_bed_temperature = 60\\nsupport_ty
;SETTING_3 pe = everywhere\\n\\n"}
