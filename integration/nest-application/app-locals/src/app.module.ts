import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
})
export class AppModule {}
<mat-card>
  <div class="container">
    <div fxLayout="column" class="blog-details">
      <div class="container">
        <div fxLayout="row">
          <h1 class="blocks">
            {{post.data?.title}}
          </h1>
          <div *ngIf="post.meta?.previous_post"><a [routerLink]="post.meta.previous_post"><</a></div>
          <div *ngIf="post.meta?.next_post"><a [routerLink]="post.meta.next_post">></a></div>
        </div>
        <h4>
          {{ post.data?.author?.first_name }} {{ post.data?.author?.last_name }}
        </h4>
        <div class="post-body" [innerHTML]="post.data?.body"></div>
      </div>
    </div>
  </div>
</mat-card>
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/welcome' };

export async function middleware() {
  const greeting = await get('greeting');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(greeting);
}
0:02:39 load avg: 2.33 [ 61/479] test_secrets passed -- running (2): test_subprocess (2 min 10 sec), test.test_multiprocessing_spawn.test_manager (1 min 19 sec)0:02:40 load avg: 2.70 [ 62/479] test_colorsys passed -- running (2): test_subprocess (2 min 11 sec), test.test_multiprocessing_spawn.test_manager (1 min 20 sec)0:02:55 load avg: 2.39 [ 63/479] test.test_multiprocessing_spawn.test_manager passed (1 min 35 sec) -- running (1): test_subprocess (2 min 26 sec)0:02:57 load avg: 2.39 [ 64/479] test_tty passed -- running (1): test_subprocess (2 min 28 sec)0:03:04 load avg: 2.44 [ 65/479] test_itertools passed -- running (2): test_subprocess (2 min 35 sec), test.test_asyncio.test_sendfile (37.1 sec)0:03:04 load avg: 2.44 [ 66/479] test_devpoll skipped -- running (2): test_subprocess (2 min 35 sec), test.test_asyncio.test_sendfile (37.2 sec)test_devpoll skipped -- test works only on Solaris OS family0:03:06 load avg: 2.40 [ 67/479] test_file passed -- running (2): test_subprocess (2 min 36 sec), test.test_asyncio.test_sendfile (38.8 sec)0:03:07 load avg: 2.40 [ 68/479] test_popen passed -- running (2): test_subprocess (2 min 38 sec), test.test_asyncio.test_sendfile (40.4 sec)0:03:09 load avg: 2.40 [ 69/479] test_posixpath passed -- running (2): test_subprocess (2 min 40 sec), test.test_asyncio.test_sendfile (42.0 sec)0:03:12 load avg: 2.37 [ 70/479] test_dis passed -- running (3): test_subprocess (2 min 43 sec), test.test_multiprocessing_spawn.test_threads (31.8 sec), test.test_asyncio.test_sendfile (45.2 sec)0:03:13 load avg: 2.37 [ 71/479] test_cext passed -- running (3): test_subprocess (2 min 44 sec), test.test_multiprocessing_spawn.test_threads (33.1 sec), test.test_asyncio.test_sendfile (46.5 sec)0:03:15 load avg: 2.26 [ 72/479] test_unicode_file_functions passed -- running (3): test_subprocess (2 min 46 sec), test.test_multiprocessing_spawn.test_threads (34.6 sec), test.test_asyncio.test_sendfile (48.0 sec)0:03:16 load avg: 2.26 [ 73/479] test_pprint passed -- running (3): test_subprocess (2 min 47 sec), test.test_multiprocessing_spawn.test_threads (36.1 sec), test.test_asyncio.test_sendfile (49.5 sec)0:03:19 load avg: 2.26 [ 74/479] test_platform passed -- running (3): test_subprocess (2 min 49 sec), test.test_multiprocessing_spawn.test_threads (38.2 sec), test.test_asyncio.test_sendfile (51.6 sec)0:03:20 load avg: 2.16 [ 75/479] test_bigmem passed -- running (3): test_subprocess (2 min 51 sec), test.test_multiprocessing_spawn.test_threads (39.6 sec), test.test_asyncio.test_sendfile (53.0 sec)0:03:20 load avg: 2.16 [ 76/479] test_subprocess passed (2 min 51 sec) -- running (2): test.test_multiprocessing_spawn.test_threads (40.1 sec), test.test_asyncio.test_sendfile (53.5 sec)0:03:23 load avg: 2.16 [ 77/479] test_builtin passed -- running (2): test.test_multiprocessing_spawn.test_threads (42.3 sec), test.test_asyncio.test_sendfile (55.7 sec)0:03:24 load avg: 2.16 [ 78/479] test_locale passed -- running (2): test.test_multiprocessing_spawn.test_threads (43.7 sec), test.test_asyncio.test_sendfile (57.1 sec)0:03:25 load avg: 2.23 [ 79/479] test_textwrap passed -- running (2): test.test_multiprocessing_spawn.test_threads (45.0 sec), test.test_asyncio.test_sendfile (58.4 sec)0:03:55 load avg: 1.74 running (4): test_timeout (30.0 sec), test.test_multiprocessing_spawn.test_threads (1 min 14 sec), test.test_asyncio.test_sendfile (1 min 28 sec), test_zipfile (35.4 sec)0:04:01 load avg: 1.76 [ 80/479] test_zipfile passed (41.2 sec) -- running (3): test_timeout (35.8 sec), test.test_multiprocessing_spawn.test_threads (1 min 20 sec), test.test_asyncio.test_sendfile (1 min 34 sec)0:04:12 load avg: 1.67 [ 81/479] test.test_multiprocessing_spawn.test_threads passed (1 min 31 sec) -- running (2): test_timeout (46.9 sec), test.test_asyncio.test_sendfile (1 min 45 sec)0:04:12 load avg: 1.67 [ 82/479] test_peg_generator skipped (resource denied) -- running (2): test_timeout (47.0 sec), test.test_asyncio.test_sendfile (1 min 45 sec)test_peg_generator skipped -- Use of the 'cpu' resource not enabled0:04:14 load avg: 1.67 [ 83/479] test_xxtestfuzz passed -- running (2): test_timeout (48.4 sec), test.test_asyncio.test_sendfile (1 min 46 sec)0:04:15 load avg: 1.67 [ 84/479] test_metaclass passed -- running (2): test_timeout (49.7 sec), test.test_asyncio.test_sendfile (1 min 48 sec)0:04:22 load avg: 1.72 [ 85/479] test_sys passed -- running (2): test_timeout (56.4 sec), test.test_asyncio.test_sendfile (1 min 54 sec)0:04:22 load avg: 1.72 [ 86/479] test_timeout passed (56.6 sec) -- running (1): test.test_asyncio.test_sendfile (1 min 54 sec)0:04:23 load avg: 1.72 [ 87/479] test_wsgiref passed -- running (1): test.test_asyncio.test_sendfile (1 min 56 sec)0:04:24 load avg: 1.72 [ 88/479] test_embed passed -- running (1): test.test_asyncio.test_sendfile (1 min 57 sec)0:04:24 load avg: 1.72 [ 89/479] test_curses passed -- running (1): test.test_asyncio.test_sendfile (1 min 57 sec)0:04:26 load avg: 1.72 [ 90/479] test_ipaddress passed -- running (1): test.test_asyncio.test_sendfile (1 min 58 sec)0:04:27 load avg: 1.72 [ 91/479] test_named_expressions passed -- running (1): test.test_asyncio.test_sendfile (2 min)0:04:30 load avg: 1.82 [ 92/479] test__interpchannels passed -- running (1): test.test_asyncio.test_sendfile (2 min 2 sec)0:04:30 load avg: 1.82 [ 93/479] test_threading_local passed -- running (1): test.test_asyncio.test_sendfile (2 min 3 sec)0:04:31 load avg: 1.82 [ 94/479] test_bigaddrspace passed -- running (1): test.test_asyncio.test_sendfile (2 min 3 sec)0:04:32 load avg: 1.82 [ 95/479] test_termios passed -- running (1): test.test_asyncio.test_sendfile (2 min 4 sec)0:04:33 load avg: 1.91 [ 96/479] test_fileutils passed -- running (1): test.test_asyncio.test_sendfile (2 min 6 sec)
