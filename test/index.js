function test1() {

    fromArea.value = `@inproceedings{azcona2019user2code2vec,
author = {Azcona, David and Arora, Piyush and Hsiao, I-Han and Smeaton, Alan},
title = {User2Code2Vec: Embeddings for Profiling Students Based on Distributional Representations of Source Code},
booktitle = {Proceedings of the 9th International Conference on Learning Analytics \& Knowledge},
series = {LAK19},
year = {2019},
isbn = {978-1-4503-6256-6},
location = {Tempe, AZ, USA},
pages = {86--95},
numpages = {10},
url = {http://doi.acm.org/10.1145/3303772.3303813},
doi = {10.1145/3303772.3303813},
acmid = {3303813},
publisher = {ACM},
address = {New York, NY, USA}
}`;
    convert();

}

function test2() {

    fromArea.value = `@book{madigan1997brock,
title={Brock biology of microorganisms},
author={Madigan, Michael T and Martinko, John M and Parker, Jack and others},
volume={11},
year={1997},
publisher={Prentice hall Upper Saddle River, NJ}
}

@article{tonouchi2007cutting,
title={Cutting-edge terahertz technology},
author={Tonouchi, Masayoshi},
journal={Nature photonics},
volume={1},
number={2},
pages={97},
year={2007},
publisher={Nature Publishing Group}
}

@phdthesis{corrigan2018investigation,
title={An Investigation Into Machine Learning Solutions Involving Time Series Across Different Problem Domains},
author={Corrigan, Owen},
year={2018},
school={Dublin City University}
}`
    convert();

}
