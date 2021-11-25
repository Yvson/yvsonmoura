import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import post_cover from '../img/svg/post_cover_mock.svg';


export default function Post() {
        let { slug } = useParams();
        return (
            <div id="post-content" className="h-full flex flex-col flex-grow gap-8 justify-between">
                <div id="post-frame" className="gap-y-2 flex flex-col justify-start items-start">
                    <div id="post-title-author" className="gap-y-2 gap-x-8 flex flex-col justify-center items-start">
                        <h1 className="post-title">Introduction to Django.</h1>
                        <p className="post-subtitle text-justify">by Yvson Moura</p>
                    </div>
                    <div id="post-cover" className="">
                        <img className="h-40 object-cover rounded-xl w-full lg:h-full" src={post_cover} alt="post" />
                    </div>
                    <div id="post-date">
                        <p className="post-date">Created at July 23rd, 2021</p>
                        <p className="post-date">Updated at August 3rd, 2021</p>
                    </div>
                    <div id="post-preview">
                        <p className="post-preview py-4">Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.</p>
                    </div>
                    <div id="post-article">
                        <p className="paragraph-base">
                            Ridiculously fast.
                            Django was designed to help developers take applications from concept to completion as quickly as possible.

                            Reassuringly secure.
                            Django takes security seriously and helps developers avoid many common security mistakes.

                            Exceedingly scalable.
                            Some of the busiest sites on the web leverage Django’s ability to quickly and flexibly scale.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at ultrices. Congue eu consequat ac felis donec. Quam elementum pulvinar etiam non quam lacus. Porttitor eget dolor morbi non arcu risus quis. Feugiat in ante metus dictum at tempor. Tellus elementum sagittis vitae et leo duis ut diam. Arcu dictum varius duis at consectetur lorem donec massa sapien. Nisi est sit amet facilisis magna. Turpis in eu mi bibendum neque egestas.

                            Sit amet risus nullam eget. Diam quam nulla porttitor massa. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Enim ut tellus elementum sagittis vitae et. Pulvinar etiam non quam lacus suspendisse faucibus. Cum sociis natoque penatibus et magnis dis parturient. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Urna duis convallis convallis tellus. Neque egestas congue quisque egestas diam. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed.

                            Volutpat lacus laoreet non curabitur gravida arcu. Aliquet nibh praesent tristique magna sit amet. Aliquet sagittis id consectetur purus ut faucibus. Nunc aliquet bibendum enim facilisis gravida. Consequat id porta nibh venenatis cras. Nibh praesent tristique magna sit amet purus gravida quis blandit. Ante in nibh mauris cursus. Faucibus turpis in eu mi bibendum. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Leo urna molestie at elementum eu facilisis sed odio morbi.

                            Sed cras ornare arcu dui vivamus arcu felis bibendum. Adipiscing at in tellus integer feugiat scelerisque varius. Gravida cum sociis natoque penatibus et. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Et odio pellentesque diam volutpat commodo sed egestas egestas. Et ligula ullamcorper malesuada proin libero nunc. Vitae et leo duis ut diam quam nulla porttitor massa. Eu facilisis sed odio morbi quis commodo odio. Turpis cursus in hac habitasse platea dictumst. Est lorem ipsum dolor sit amet consectetur adipiscing. Nisi scelerisque eu ultrices vitae auctor. Potenti nullam ac tortor vitae purus faucibus ornare. Ultricies mi quis hendrerit dolor. Ultrices in iaculis nunc sed augue lacus. Vel pretium lectus quam id leo in. Cras ornare arcu dui vivamus arcu felis bibendum.

                            Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Semper feugiat nibh sed pulvinar. Vitae purus faucibus ornare suspendisse sed. Commodo ullamcorper a lacus vestibulum sed arcu. Donec ac odio tempor orci dapibus ultrices in iaculis. Ut lectus arcu bibendum at varius vel pharetra vel. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Nunc mattis enim ut tellus elementum sagittis vitae et. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Massa tincidunt nunc pulvinar sapien et. Sit amet massa vitae tortor condimentum lacinia. Risus nullam eget felis eget. Tortor id aliquet lectus proin nibh nisl. Nisl condimentum id venenatis a condimentum.
                        </p>
                    </div>

                </div>
            </div>
        );
    }

