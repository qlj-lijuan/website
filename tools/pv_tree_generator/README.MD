 ### Generate the json configuration file used by GNI tool to build the menu of statistical variables for the users to choose from.
 
 **To generate the json file**
 
        sh ./generate_json.sh
        
**To run the test** 

        sh ./pv_tree_test.sh
 
 * [main.py](./main.py): the main script for generating the json configuration 
 * [build_tree.py](./build_tree.py): build the property-value(pv) tree recursively
 * [util.py](./util.py): functions used for building the pv tree
 * [hierarchy.json](./hierarchy.json): generated json file 
 * [stat_config.proto](./stat_config.proto): configuration file for generating [stat_config_pb2.py](./stat_config_pb2.py), used for parsing the input config files. 
 * [constants.py](./constants.py): constants used for building the pv tree
 * [text_format.py](./text_format.py): functions formating the texts shown in UI
 * [text_format_test.py](./text_format_test.py): unittest for text_format.py
 * [pop_obs_spec_common.textproto](./pop_obs_spec_common.textproto) : contain lists of specs with specific population_type, measured_property, contraint properties etc, that will be shown in the gni for the users to choose from. 


