original = open("dictionary.txt", "r")
copyA = open("dictionaryA-J.ts", "w")
copyK = open("dictionaryK-T.ts", "w")
copyU = open("dictionaryU-Z.ts", "w")

copyA.write("export const dictionaryAJ = [\n")
copyK.write("export const dictionaryKT = [\n")
copyU.write("export const dictionaryUZ = [\n")
for line in original:
    if line[0] < 'K':
        copyA.write("\t\"" + line.rstrip('\n') + "\"" + ",\n")
    elif line[0] < 'U':
        copyK.write("\t\"" + line.rstrip('\n') + "\"" + ",\n")    
    else:
        copyU.write("\t\"" + line.rstrip('\n') + "\"" + ",\n")    

copyA.write("]")
copyK.write("]")
copyU.write("]")

original.close()
copyA.close()
copyK.close()
copyU.close()
