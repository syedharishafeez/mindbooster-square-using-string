import math
import collections
import time

inputString = input("Enter a string: ")
start_time = time.time()

def comparing_method(inputStringMethod, outputStringMethod):
    if len(inputStringMethod) != len(outputStringMethod):
        return False
    for matchingIndex in range(0,len(inputStringMethod)):
        if inputStringMethod[matchingIndex] != outputStringMethod[matchingIndex]:
            return False
    return True

if len(inputString)>=1 and  len(inputString)<10:

    inputStringResult = collections.Counter(inputString)
    inputStringArray=[]
    for value in inputStringResult.values():
        inputStringArray.append(value)
    inputStringArray.sort()

    maximum_value = int(math.sqrt(10**len(inputString) - 1))
    minimum_value = int(math.sqrt(10**(len(inputString)-1) - 1))

    finalResult = -1
    for i in range(maximum_value,minimum_value,-1):
        outputStringResult = collections.Counter(str(i**2))
        outputStringArray=[]
        for value in outputStringResult.values():
            outputStringArray.append(value)
        if comparing_method(inputStringArray,outputStringArray):
            finalResult = i**2
            break
        else:
            continue

    print("finalResult = "+str(finalResult))
    
else:
    print("The length of input should be in between 0 - 10")

print("Total Execution Time = "+str((time.time() - start_time)*1000)+"ms")