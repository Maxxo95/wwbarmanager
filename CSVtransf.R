library(dplyr)
library(lubridate)
library(tidyr)
library(ggplot2)
library(grid)
install.packages("FSelector")
library(FSelector)
getwd()
setwd("C:/Users/Acer Nitro/Desktop/BarManager")   

cocktails <- read.csv("complete_final_cocktail_recipes_2025.csv")
cocktails
cocktails <- cocktails[, !(colnames(cocktails) %in% "Method")]
cocktails[is.na(cocktails) | cocktails == ""] <- "non"
colnames(cocktails) <- gsub("\\.", "_", colnames(cocktails))

# Save the modified dataset to a new CSV file
write.csv(cocktails, "modified_cocktail_recipes.csv", row.names = FALSE)
summary(cocktails)